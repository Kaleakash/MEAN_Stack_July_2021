let fs = require("fs");
let msg = "Welcome to Node JS Fs module\n";
//fs.writeFileSync("demo2.txt",msg);      // override the data 
fs.writeFileSync("demo2.txt",msg,{flag:'a+'});      // append the data 
console.log("file stored..")