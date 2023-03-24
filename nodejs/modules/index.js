const http = require("http"); //require() is for including the module

const server = http.createServer((req, res) => {
  res.end("Hello World");
});

server.listen(8080, () => {
  console.log("Server is working!");
});
