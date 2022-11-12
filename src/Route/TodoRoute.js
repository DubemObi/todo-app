const express = require("express");
const Todo = require("../Controller/todoController");
const app = express();
app.use(express.json());

const router = express.Router();

const { createTodo, getAllTodo } = Todo;

router.route("/").post(createTodo).get(getAllTodo);

module.exports = router;
