const express = require("express");
const app = express();
// const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { dbUrl } = require("./db/database");
const { todoRoutes } = require("./routes/route");

// middlewares
// app.use(cors);
app.use(bodyParser.json());

// database connection
main()
  .then(() => console.log("Database connected successfully!"))
  .catch((error) => console.log(error));

async function main() {
  await mongoose.connect(dbUrl);
}

todoRoutes(app);

app.listen(3000, () => {
  console.log("App successfully listened!");
});
