let express = require("express");
let app = express();


let emp = {id:100,name:"Ravi",age:21};

app.get("/simpleMsg",(req,res)=> {
    res.send("Welcome to Simple Application");
})

app.get("/empInfo",(req,res)=> {
    res.json(emp);
})

app.listen(9090,()=>console.log("Server running on port number 9090"));

module.exports=app;