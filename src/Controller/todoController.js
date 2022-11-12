const Todo = require("../Model/TodoModel");
const { handleErrors } = require("../error");

exports.createTodo = async (request, response) => {
  try {
    const { title, description, duration } = request.body;
    const newTask = new Todo({ title, description, duration });
    await newTask.save();
    return response.status(201).send({
      status: true,
      message: "Task has been created",
      data: newTask,
    });
  } catch (err) {
    const error = handleErrors(err);
    return response.status(400).json({ error });
  }
};

// exports.getOneTask = async (request, response) => {
//   try {
//     const id = request.params.id;
//     const findOneTask = await Todo.findById(id);

//     if (!findOneTask) {
//       return response.status(404).send({
//         status: false,
//         message: "Todo not found",
//       });
//     } else {
//       return response.status(200).send({
//         status: true,
//         message: "Todo found",
//         Blog: findOneTask,
//       });
//     }
//   } catch (err) {
//     if (err.path === "_id") {
//       return response.status(401).send({
//         status: false,
//         message: "Invalid ID",
//       });
//     } else {
//       return response.status(500).send({
//         status: false,
//         message: "Server Error",
//       });
//     }
//   }
// };

exports.getAllTodo = async (request, response) => {
  const findAllTodo = await Todo.find();
  return response.status(200).send({
    status: true,
    message: "All Todos",
    data: findAllTodo,
  });
};

// exports.deleteTodo = async (request, response) => {
//   const { id } = request.params;
//   const findTodo = await Todo.findByIdAndDelete(id);
//   if (findTodo) {
//     return response.status(200).send({
//       status: true,
//       message: "Todo deleted successfully",
//     });
//   } else {
//     return response.status(409).send({
//       status: false,
//       message: "Todo not found",
//     });
//   }
// };
