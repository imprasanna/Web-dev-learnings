const express = require("express");
// const path = require("path");
const port = 3000;

const app = express();

// CRUD in express.js
/*  C: Create -> post
    R: Read -> get
    U: Update ->put
    D: Delete -> delete
*/

app.get("/hello/:name", (req, res) => {
  res.send("Hello, " + req.params.name); // same as res.end() as in node.js
});

app.get("/about", (req, res) => {
  res.json({ name: "Prasanna", age: 23 });
});

app.get("/oi", (req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`App is being listened at http://localhost:${port}`);
});
