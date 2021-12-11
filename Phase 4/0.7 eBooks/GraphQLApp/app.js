
let express = require("express");
let {graphqlHTTP}= require("express-graphql");
let {buildSchema} = require("graphql");

let app = express();

let mySchema = buildSchema(`
    type Query {
        info:String,
        sayHello(name:String):String,
        employeeInfo:[Employee]
        findEmployee(id:Int):String
    },
    type Employee {
        id:Int,
        name:String,
        age:Int
        desg:String
    }
    `
)

let employeesDetails =[
    {id:100,name:"Ravi",age:21,desg:"Tester"},
    {id:101,name:"Ajay",age:24,desg:"Developer"},
    {id:102,name:"Vijay",age:28,desg:"Tester"},
    {id:103,name:"Ramesh",age:32,desg:"Manager"},
    {id:104,name:"Lokesh",age:35,desg:"Clerk"}
]

let root = {
    info: ()=>"Welcome to Simple Graph QL Example",
    sayHello:(obj)=>"Welcome user "+obj.name,
    employeeInfo:()=>employeesDetails,
    findEmployee:(obj)=>{
        let emp = employeesDetails.find(e=>e.id==obj.id);
        if(emp!=undefined){
            return emp.name;
        }else {
            return "Record not present";
        }
    }
}
// it is a middleware 
app.use("/graphql",graphqlHTTP({
    schema: mySchema,
    rootValue:root,
    graphiql:true
})) 

app.listen(9090,()=>console.log("Simple Graph QL example running"));