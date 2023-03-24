// reading the qurey string

let http = require("http");

http
  .createServer((req, res) => {
    //req argument represents the request from client
    res.write(req.url); // url is a property which holds the part of the url that comes after the domain name
    res.end();
  })
  .listen(2000);

//  try --> http://localhost:2000/hello
// result --> /hello
