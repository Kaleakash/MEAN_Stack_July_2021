let fs = require("fs");
let data = fs.readFileSync("demo2.txt");        // read sync
let msg = data.toString();              // converting buffer to string format 
console.log(msg);   
