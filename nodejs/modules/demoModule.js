let http = require("http");
let time = require("./myModule");

// create a server object
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" }); //this is an HTTP header, 200 is a status code denoting All is OK and , another argument is an object containing the response header
    res.write("Current time --> " + time.myTime()); //write a response to the client
    res.end(); //end the response
  })
  .listen(8000); //the server object listens on port 8000
