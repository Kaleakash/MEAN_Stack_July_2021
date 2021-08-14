// number of parameter must be match by default any types considers 
function addNumber(a,b){
    console.log(a+b);
}
addNumber(10,20);
addNumber(10.10 , 20.30);
addNumber("Raj","Deep");
//addNumber(1);    // two parameter must be pass 
//addNumber();       two parameter must be pass 

// number of parameter and type of parameter must be match.
function sumOfNumbers(a:number,b:number){
        console.log(a+b);
}
sumOfNumbers(100,200);
sumOfNumbers(10.20,20.30);
//sumOfNumbers("Raj"," Deep")

// function with no return type , void means no return type. 
function info() : void {
        console.log("welcome to info function")
        //return 100;
}
info();
// function with specific return type like string 
function sayHello(name:string): string {
        return "Welcome "+name;
}
console.log(sayHello("Raj"))
// function with number return type 
function add(a:number,b:number):number {
        let sum = a+b;
        return sum;
}
console.log(add(100,200))
// function with no return type as well as it can return any type. 
// by default any consider. 
function hello() : any {
    //return 100;
    //return "Welcome"
    return true;
}
console.log(hello());

let sumOfNumber = (a:number,b:number):number=>a+b;
console.log(sumOfNumber(100,200));

// function with optional parameter 
// we can declare the variable with ?
// optional parameter declaration must be from right to left. 
// we can make 0 or 1 or all varaible as optional parameter 
// mandatory parameter must be left side in parameter. 
// no gap between two optional paramter declaration. 
// no mandatory mandatory parameter between two optional parameter. 
// by default optional parameter value is undefined. 
function empInfo(id?:number,name?:string,salary?:number,age?:number){
    console.log("id is "+id);
    console.log("name is "+name);
    console.log("salary is "+salary);
    console.log("age is "+age);
}
empInfo(100,"Raj",12000,21);
empInfo(101,"Ramesh",14000);    // age undefined  
empInfo(102,"Raju");            // salary and age undefined 
empInfo(103);                   // name, salary, age undefined 
empInfo();                      //id,name,salary,age undefined 

//default initialization 
function studentInfo(sid:number=0,sname:string="Unknown",age:number=18): void {
    console.log("Sid is "+sid);
    console.log("Sname is "+sname);
    console.log("age is "+age)
}
studentInfo(1,"Raj",21);
studentInfo(2,"Ramesh");
studentInfo(3);
studentInfo();

// rest operator or parameter : this operator is use 
// to receive 0 or 1 or many parameter. 
// in one function we can declare only one parameter as rest parameter 
// it must be last parameter insider function 
function employeeDetails(id:number,name:string,salary:number,...skillset:string[]){
        console.log("id is "+id);
        console.log("name is"+name);
        console.log("salary is "+salary);
        console.log("skillset is "+skillset)
}
let skillInfo:Array<string>=["React","Angular","Node","MongoDB"];
employeeDetails(1,"Raj",12000,"C");
employeeDetails(2,"Raju",10000);
employeeDetails(3,"Ramesh",20000,"C","C++");
employeeDetails(4,"Ajay",25000,"HTML","CSS","JS","Angular");
employeeDetails(5,"Raju",35000,skillInfo[0],skillInfo[1],skillInfo[2],skillInfo[4]);
employeeDetails(6,"Raj",34000,...skillInfo);    // spread operator 
// spread operator is use to pass the array value to rest operator. 


















