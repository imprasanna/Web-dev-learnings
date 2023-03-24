const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    fs.readFile("./demofile1.html", (err, data) => {
      res.write(data);
      res.end();
    });
  })
  .listen(8080);
