const express = require("express");

const app = express();

const bodyParser = require("body-parser"); // this is for parsing the body in put (update) method

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;

// app.use(cors());

// CRUD in express.js
/*  C: Create -> post
    R: Read -> get
    U: Update ->put
    D: Delete -> delete
*/

// req.body
// req.query
// req.params

/* app.get("/hello/:name", (req, res) => {
  res.send("Hello, " + req.params.name); // same as res.end() as in node.js
});

app.get("/about", (req, res) => {
  res.json({ name: "Prasanna", age: 23 });
});

app.get("/oi", (req, res) => {
  res.sendStatus(404);
}); */

const todos = [
  {
    id: 1,
    status: "pending",
    title: "Todo 1",
  },
  {
    id: 2,
    status: "completed",
    title: "Todo 2",
  },
  {
    id: 3,
    status: "completed",
    title: "Todo 3",
  },
  {
    id: 4,
    status: "pending",
    title: "Todo 4",
  },
  {
    id: 5,
    status: "completed",
    title: "Todo 5",
  },
];

app.get("/api", (req, res) => {
  res.send(todos);
});

// get single todo (read)
app.get("/api/todos/:todoId", (req, res) => {
  const todoId = req.params.todoId;

  const findTodo = todos.find((todo) => todo.id === parseInt(todoId));

  res.send(findTodo);
});

// delete single todo (delete)
app.delete("/api/todos/:todoId", (req, res) => {
  const todoId = req.params.todoId;

  const filterTodo = todos.filter((todo) => todo.id !== parseInt(todoId));

  res.send(filterTodo);
});

// put single todo (update)
app.put("/api/todos/:todoId", (req, res) => {
  // {
  //   "id": 1,
  //   "status": "pending",
  //   "title": "Todo 1"
  // }
  res.send({});
});

app.listen(port, () => {
  console.log(`App is being listened at http://localhost:${port}`);
});
