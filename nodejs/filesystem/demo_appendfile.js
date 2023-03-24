const fs = require("fs");

fs.appendFile("mynewfile1.txt", "Hello World!", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Saved");
  }
});
