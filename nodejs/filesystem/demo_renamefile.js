const fs = require("fs");

fs.rename("mynewfile2.txt", "mynewrenamedfile.txt", (err) => {
  if (err) {
    throw err;
  } else {
    console.log("File renamed");
  }
});
