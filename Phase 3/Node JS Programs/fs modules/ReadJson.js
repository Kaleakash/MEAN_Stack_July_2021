let fs = require("fs");
fs.readFile("emp.json",(err,data)=> {
    if(!err){
        //console.log(data);
        let emp = JSON.parse(data.toString());
        //console.log(emp);
        console.log("id is "+emp.id);
        console.log("name is "+emp.name);
        console.log("age is "+emp.age);
    }
})