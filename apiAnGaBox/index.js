const express = require("express");
const connectDB = require("./src/config/database");
const app = express();
const router = require("./src/routers/router")
app.use(express.json());
app.use("/api", router);
connectDB();

//configuração da porta
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  connectDB();
  console.log("We are in the Air :)");
});
  