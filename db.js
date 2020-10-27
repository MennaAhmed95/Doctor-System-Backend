// const mongoose = require("mongoose");
// mongoose
//   .connect("mongodb://localhost/Doctor-System-Nodejs")
//   .then(() => console.log("Connected to MongoDB..."))
//   .catch((err) => console.error("Could not connect to MongoDB..."));

const mongoose = require("mongoose");
require("dotenv").config();

const dataBase_Connection = process.env.DB_CONNECTION;

mongoose
  .connect(dataBase_Connection, {
    useNewUrlParser: true,
  })
  .then(() => console.info("connected to mongo successfuly"))
  .catch((err) => {
    console.error(err);
  });
// mongodb://localhost/Nodejs-project
