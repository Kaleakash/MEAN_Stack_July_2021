let fs = require("fs");
//let emp = {id:100,name:"Raj",age:21};       // literal style object not a json
let emp1 = {id:101,name:"Ajay",age:24}; 
fs.writeFile("emp.json",JSON.stringify(emp1),(err)=> {
    if(!err){
        console.log("Data stored in file");
    }
})