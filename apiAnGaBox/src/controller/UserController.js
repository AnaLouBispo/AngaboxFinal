const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({
          msg: "Email ou senha incorretos.",
        });
      }
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) {
        return res.status(400).json({
          msg: "Email ou senha incorretos.",
        });
      }
  
      const token = jwt.sign(
        {
          email: user.email,
          nome: user.nameUser,
         
        },
        process.env.SECRET,
        { expiresIn: "1h" }
      );
  
      return res.status(200).json({
        msg: "Login realizado com sucesso.",
        token,
        userId: user._id
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
      const { nameUser, email, password } = req.body;
     const hashedPassword = await bcrypt.hash(password, 5);
      const user = await User.create({
        nameUser,
        email,
        password: hashedPassword
      });

      return res.status(200).json({
        msg: "User Created ;D",
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        msg: "Error :|",
      });
    }
  },

  getAll: async (req, res) => {
    try {
      const users = await User.find();
      return res.status(200).json({
        msg: "All Users :3",
        users,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Error :|",
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({
          msg: "User not found :(",
        });
      }
      return res.status(200).json({
        msg: "User found",
        user,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Error :|",
      });
    }
  },

  update: async (req, res) => {
    try {
      const { id } = req.params;
      const { userName, email, password } = req.body;
      const user = User.findById(id);
      if (!user) {
        return res.status(404).json({
          msg: "User not found :(",
        });
      }
      const userUpdated = await User.findByIdAndUpdate(id, {
        userName,
        email,
        password,
      });
      return res.status(200).json({
        msg: "User updated",
        userUpdated,
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Error :|",
      });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;
      const user = User.findById(id);
      if (!user) {
        return res.status(404).json({
          msg: "User not found",
        });
      }
      await User.findByIdAndDelete(id);
      return res.status(200).json({
        msg: "User deleted",
      });
    } catch (error) {
      return res.status(500).json({
        msg: "Error :|",
      });
    }
  },
};
module.exports = UserController;
