let obj = require("readline");
let r1  = obj.createInterface({
    input:process.stdin,
    output:process.stdout
});
r1.question("Enter the id",(id)=> {
    r1.question("Enter the name",(name)=> {
        r1.question("Enter the salary",(salary)=> {
            console.log("id is "+id);
            console.log("name is "+name);
            console.log("salary is "+salary);
            r1.close();
        })
    })
})