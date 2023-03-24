const url = require("url");
const addr = "http://localhost:8080/default.htm?year=2017&month=february";
const q = url.parse(addr, true); //The parse method returns an object containing url properties

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

const qdata = q.query; //The query property returns an object with all the querystring parameters as properties
console.log(qdata.year);
console.log(qdata.month);
