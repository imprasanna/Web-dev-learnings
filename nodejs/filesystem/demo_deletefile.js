const fs = require("fs");

fs.unlink("mynewfile2.txt", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("Saved!");
  }
});
