const validateAdmin = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || typeof email !== "string") {
    return res.status(400).json({ msg: "Campos inválidos" });
  }

  if (!(email.includes("@") && email.includes("."))) {
    return res.status(400).json({ msg: "Campo email inválido" });
  }

  if (!password || typeof password !== "string") {
    return res.status(400).json({
      msg: "Campos inválidos",
    });
  }
  next();
};

const validateAdmId = (req, res, next) => {
  const { id } = req.params;

  if (!id || typeof id !== "string") {
    if (!id || typeof id !== "string") {
      return res.status(400).json({ msg: "Parâmetro ID inválido" });
    }
  }

  next();
};

module.exports = { validateAdmin, validateAdmId };
