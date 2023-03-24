const fs = require("fs");

fs.writeFile("mynewfile2.txt", "Hello Kathmandu!", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Saved!");
  }
});
