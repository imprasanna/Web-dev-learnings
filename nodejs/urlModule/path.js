const path = require("path");

const fileExtName = path.extname("/home/random/index.html");
const dirName = path.dirname("/home/random/index.html");

console.log(fileExtName);
console.log(dirName);
