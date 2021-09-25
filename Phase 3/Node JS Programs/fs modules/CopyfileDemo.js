let fs = require("fs");
fs.copyFile("demo1.txt","sample.txt",(err)=> {
    if(!err){
        console.log("file copied...")
    }
})