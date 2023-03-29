const {
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
  createTodo,
} = require("../controllers/todoController");

const todoRoutes = (app) => {
  // create single todo
  app.post("/api/todos", createTodo);

  // get all todos
  app.get("/api/todos", getTodos);

  // get single todo (read)
  app.get("/api/todos/:todoId", getTodo);

  // delete single todo (delete)
  app.delete("/api/todos/:todoId", deleteTodo);

  // put single todo (update)
  app.put("/api/todos/:todoId", updateTodo);
};

module.exports = { todoRoutes };
