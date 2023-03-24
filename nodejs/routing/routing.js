let http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.end("<h1>Home Page</h1>");
    } else if (req.url === "/about") {
      res.end("<h1>About Page</h1>");
    } else if (req.url === "/contact") {
      res.end("<h1>Contact Page</h1>");
    } else {
      res.end("<h1>404 Page Not Found!");
    }
  })
  .listen(9000);
