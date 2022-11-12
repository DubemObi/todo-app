const express = require("express");
const Todo = require("./src/Route/TodoRoute");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });

const app = express();
const PORT = 9020;
app.use(express.json());
app.use("/api/v1/todo", Todo);

mongoose.connect(process.env.mongoDB).then(() => {
  console.log("Connected to Database");
});

app.listen(PORT, () => {
  console.log("App running on server");
});
