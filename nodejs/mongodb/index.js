const express = require("express");
const mongoose = require("mongoose");

const app = express();

const bodyParser = require("body-parser"); // this is for parsing the body in put (update) method

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;

// Database connection
main()
  .then(() => console.log("Connected to database!"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(
    "mongodb+srv://prasannaacharya2073:wH3mUwh2wGPQ0W0A@cluster0.fuzoins.mongodb.net/?retryWrites=true&w=majority"
  );
}

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

const todoSchema = new mongoose.Schema(
  {
    title: String,
    status: String,
  },
  {
    timestamps: true,
  }
);

const Todo = mongoose.model("Todo", todoSchema);

// create single todo
app.post("/api/todos", (req, res) => {
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
});

// get all todos
app.get("/api/todos", (req, res) => {
  const todos = Todo.find();
  todos
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
});

// get single todo (read)
app.get("/api/todos/:todoId", (req, res) => {
  const todoId = req.params.todoId;

  const findTodo = Todo.find({ _id: todoId });

  find.then((response) => res.send(response)).catch((error) => res.send(error));
});

// delete single todo (delete)
app.delete("/api/todos/:todoId", (req, res) => {
  const todoId = req.params.todoId;

  const deleteTodo = Todo.deleteOne({ _id: todoId });
  deleteTodo
    .then((response) => res.send(response))
    .catch((error) => res.send(error));
});

// put single todo (update)
app.put("/api/todos/:todoId", (req, res) => {
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
});

app.listen(port, () => {
  console.log(`App is being listened at http://localhost:${port}`);
});
