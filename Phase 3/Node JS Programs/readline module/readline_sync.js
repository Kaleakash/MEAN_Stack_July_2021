let obj = require("readline-sync");
let id = obj.questionInt("Enter the id")
let name = obj.question("Enter the name")
let salary = obj.questionFloat("Enter the salary");
console.log("id is "+id);
console.log("name is "+name);
console.log("salary is "+salary);