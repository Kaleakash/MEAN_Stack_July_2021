let fs = require("fs");
// 1st parameter file path or file name
// 2nd parameter callback with 1st error and 2nd data 
fs.readFile("demo1.txt",(err,data)=> {
    if(!err){
        let msg = data.toString();  // converting buffer to string format
        console.log(msg);
    }else {
        console.log(err);
    }
})
console.log("Hello...")
console.log("Hello...")