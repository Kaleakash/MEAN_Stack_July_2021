// load the fs module 
let fs = require("fs");
//let msg = "Welcome to Node JS Program using FS module";
let msg = "Welcome to Node JS"
//1st parameter file name
// 2nd parameter data 
// 3rd callback function
// Data get override  
// fs.writeFile("demo1.txt",msg,(err)=> {
   
//     if(!err){
//         console.log("Data Stored successfully in file")
//     }else {
//         console.log(err);
//     }

// })
// append the Data ie flag with a+ means append the data
fs.writeFile("demo1.txt",msg,{flag:'a+'},(err)=> {  
   
    if(!err){
        console.log("Data Stored successfully in file")
    }else {
        console.log(err);
    }

})
