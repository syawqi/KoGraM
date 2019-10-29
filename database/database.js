const mongoose = require("mongoose");
require("dotenv").config();

const initDB = () => {
  mongoose.connect(process.env.MONGO_CONFIG, { useNewUrlParser: true });

  mongoose.connection.once("open", () => {
    console.log("connected to database");
  });
};

module.exports = initDB;
