const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const adminController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const adm = await Admin.findOne({ email });
      if (!adm) {
        return res.status(400).json({
          msg: "Email ou senha incorretos.",
        });
      }
      const isValid = await bcrypt.compare(password, adm.password);
      if (!isValid) {
        return res.status(400).json({
          msg: "Email ou senha incorretos.",
        });
      }

      const token = jwt.sign(
        {
          email: adm.email,
          nome: adm.nameUser,
        },
        process.env.SECRET,
        { expiresIn: "1h" }
      );

      return res.status(200).json({
        msg: "Login realizado com sucesso.",
        token,
        admId: adm._id,
      });
    } catch (error) {
      console.log(error);

      return res.status(500).json({
        msg: "Ocorreu um erro ao processar o login.",
      });
    }
  },

  create: async (req, res) => {
    try {
      const { admName, email, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 5);
      const adm = await Admin.create({
        admName,
        email,
        password: hashedPassword,
      });
      return res.status(200).json({
        msg: "Adm created",
        adm,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Error : (",
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const adms = await Admin.find();
      return res.status(200).json({
        msg: "All Adms",
        adms,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Error :/",
      });
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const adm = await Admin.findById(id);

      if (!adm) {
        return res.status(404).json({
          msg: "Adm not found",
        });
      }

      return res.status(200).json({
        msg: "Adm found",
        adm,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Error",
      });
    }
  },
  update: async (req, res) => {
    try {
      const { id } = req.params;
      const admFound = await Admin.findById(id);
      if (!admFound) {
        return res.status(404).json({
          msg: "Adm not found",
        });
      }

      const { admName, email, password } = req.body;
      const adm = await Admin.findByIdAndUpdate(id, {
        admName,
        email,
        password,
      });
      return res.status(200).json({
        msg: "Adm updated",
        adm,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Error",
      });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const admFound = await Admin.findById(id);
      if (!admFound) {
        return res.status(404).json({
          msg: "Adm not found",
        });
      }
      await Admin.findByIdAndDelete(id);
      return res.status(200).json({
        msg: "Adm Deleted",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Error",
      });
    }
  },
};
module.exports = adminController;
