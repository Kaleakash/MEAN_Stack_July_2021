let fs = require("fs");
let employees =[
    {id:1,name:"Raju",age:21},
    {id:2,name:"Ravi",age:22},
    {id:3,name:"Ramesh",age:23},
];
let emp = {id:5,name:"Balaji",age:25};
fs.readFile("employees.json",(err,data)=> {
    if(!err){
        let employeesInfo = JSON.parse(data.toString());
        employeesInfo.push(emp);
        
        
        fs.writeFile("employees.json",JSON.stringify(employeesInfo),(err)=> {
            if(!err){
                console.log("Record stored in file");
            }
        })

    }else {
        console.log(err)
    }
})
