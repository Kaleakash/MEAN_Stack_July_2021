// load the module 
let express = require("express");
let bodyParser = require("body-parser");
// creating the reference of module 
let app = express();

// add the middleware to enable post data methods 
//app.use(express.json());        // enable post json data , new version 
app.use(bodyParser.json());         // old version

let emp = {id:100,name:"Raj",salary:12000};
let employees =[
    {id:100,name:"Raj",age:21},
    {id:101,name:"Ravi",age:22},
    {id:102,name:"Ramesh",age:23},
    {id:103,name:"Rajesh",age:24},
]
// produce the data in text format. 
// http://localhost:9090/simpleTextMsg
app.get("/simpleTextMsg",(req,res)=> {
    res.send("Welcome to Simple REst API with Text Message");
})

// produce the data in json format 
// http://localhost:9090/simpleJsonMsg
app.get("/simpleJsonMsg",(req,res)=> {
    res.json({abc:"Welcome to Simple REST API with JSON format"});
})

// produce the single object in json format
// http://localhost:9090/empDetails 
app.get("/empDetails",(req,res)=> {
    res.json(emp);
})

// product collection of objects 
// http://localhost:9090/employeesDetails 
app.get("/employeesDetails",(req,res)=> {
    res.json(employees);
})

// consume data using query param with single value 
// http://localhost:9090/singleQueryParam?name=Raj
app.get("/singleQueryParam",(req,res)=> {
    let user = req.query.name;
    res.send("Welcome to RESt API User "+user);
})
// consume data using query param with multiple value
 // http://localhost:9090/multipleQueryParam?id=100&name=Raj&salary=12000
app.get("/multipleQueryParam",(req,res)=> {
    let id = req.query.id;
    let name = req.query.name;
    let salary = req.query.salary;
    res.send(`Your id is ${id} name is ${name} and salary is ${salary}`);
})

// consume data using path param with single value 
// http://localhost:9090/singlePathParam/Raj
app.get("/singlePathParam/:user",(req,res)=> {
    let userName = req.params.user;
    res.send("Welcome to REST API user with path param "+userName);
})
// consume data using path paam with multiple value 
//http://localhost:9090/multiplePathParam/100/Ravi/12000
app.get("/multiplePathParam/:id/:name/:salary",(req,res)=> {
    let id = req.params.id;
    let name = req.params.name;
    let salary = req.params.salary;
    res.send(`id is ${id} name is ${name} and salary is ${salary}`);
})
// sub with with path param 
// http://localhost:9090/mainpath/subpath/Raju
app.get("/mainpath/subpath/:name",(req,res)=> {
    let name = req.params.name;
    res.send("WElcome user "+name);
});
// consume employee details through post method. 
// http://localhost:9090/storeEmployeeInfo
app.post("/storeEmployeeInfo",(req,res)=> {
    let emp = req.body;     // this code is use to receive data from body part 
    console.log("I came in post method ")
    console.log(emp);
    res.json(emp);
})
// consume employee details through put method 
// http://localhost:9090/updateEmployeeInfo
app.put("/updateEmployeeInfo",(req,res)=> {
    let emp = req.body;
    emp.salary = emp.salary + 3000;
    res.json(emp);
})

// consume emloyee id using path param 
// http://localhost:9090/deleteEmployeeInfo/100

app.delete("/deleteEmployeeInfo/:empId",(req,res)=> {
    let empId = req.params.empId;
    res.send("Emloyee details with id deleted successfully "+empId);
})

app.listen(9090,()=>console.log("Running the application on port number 9090"))

