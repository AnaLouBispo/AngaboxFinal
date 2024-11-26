const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
  {
    admName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Admin", adminSchema);
