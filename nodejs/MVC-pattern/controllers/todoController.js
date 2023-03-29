const { Todo } = require("../models/todo");

const createTodo = (req, res) => {
  console.log("REQUEST", req.body, req.params, req.query);
  const todo = new Todo({
    title: req.body.title,
    status: req.body.status,
  });
  todo
    .save()
    .then((response) => {
      res.send(response);
    })
    .catch((error) => res.send(error));
};

const getTodos = (req, res) => {
  const todos = Todo.find();
  todos
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
};

const getTodo = (req, res) => {
  const todoId = req.params.todoId;

  const findTodo = Todo.findOne({ _id: todoId });

  findTodo
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
};

const deleteTodo = (req, res) => {
  const todoId = req.params.todoId;

  const deleteTodo = Todo.deleteOne({ _id: todoId });
  deleteTodo
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
};

const updateTodo = (req, res) => {
  const todoId = req.params.todoId;
  console.log(todoId, req.body);
  const updateTodo = Todo.findByIdAndUpdate(
    {
      _id: todoId,
    },
    {
      title: req.body.title,
      status: req.body.status,
    },
    {
      new: true,
    }
  );
  updateTodo
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
};

module.exports = {
  createTodo,
  getTodos,
  getTodo,
  deleteTodo,
  updateTodo,
};
