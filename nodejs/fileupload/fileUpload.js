// Step 1: Create an upload form:

const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(
      '<form action="fileupload" method="post" enctype="multipart/form-data">'
    );
    res.write('<input type="file" name="fileuplaod"');
    res.write("<br>");
    res.write('<input type="submit">');
    res.write("</form>");
    return res.end;
  })
  .listen(8080);
