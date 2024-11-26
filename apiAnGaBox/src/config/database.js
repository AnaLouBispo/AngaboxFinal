const mongoose = require("mongoose");
require("dotenv").config(); 

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    await mongoose.connect(mongoURI);
    console.log("Connection established");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
