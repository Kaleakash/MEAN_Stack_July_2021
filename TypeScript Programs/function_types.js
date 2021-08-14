// number of parameter must be match by default any types considers 
function addNumber(a, b) {
    console.log(a + b);
}
addNumber(10, 20);
addNumber(10.10, 20.30);
addNumber("Raj", "Deep");
//addNumber(1);    // two parameter must be pass 
//addNumber();       two parameter must be pass 
// number of parameter and type of parameter must be match.
function sumOfNumbers(a, b) {
    console.log(a + b);
}
sumOfNumbers(100, 200);
sumOfNumbers(10.20, 20.30);
//sumOfNumbers("Raj"," Deep")
// function with no return type , void means no return type. 
function info() {
    console.log("welcome to info function");
    //return 100;
}
info();
// function with specific return type like string 
function sayHello(name) {
    return "Welcome " + name;
}
console.log(sayHello("Raj"));
// function with number return type 
function add(a, b) {
    var sum = a + b;
    return sum;
}
console.log(add(100, 200));
// function with no return type as well as it can return any type. 
// by default any consider. 
function hello() {
    //return 100;
    //return "Welcome"
    return true;
}
console.log(hello());
var sumOfNumber = function (a, b) { return a + b; };
console.log(sumOfNumber(100, 200));
// function with optional parameter 
// we can declare the variable with ?
// optional parameter declaration must be from right to left. 
// we can make 0 or 1 or all varaible as optional parameter 
// mandatory parameter must be left side in parameter. 
// no gap between two optional paramter declaration. 
// no mandatory mandatory parameter between two optional parameter. 
// by default optional parameter value is undefined. 
function empInfo(id, name, salary, age) {
    console.log("id is " + id);
    console.log("name is " + name);
    console.log("salary is " + salary);
    console.log("age is " + age);
}
empInfo(100, "Raj", 12000, 21);
empInfo(101, "Ramesh", 14000); // age undefined  
empInfo(102, "Raju"); // salary and age undefined 
empInfo(103); // name, salary, age undefined 
empInfo(); //id,name,salary,age undefined 
//default initialization 
function studentInfo(sid, sname, age) {
    if (sid === void 0) { sid = 0; }
    if (sname === void 0) { sname = "Unknown"; }
    if (age === void 0) { age = 18; }
    console.log("Sid is " + sid);
    console.log("Sname is " + sname);
    console.log("age is " + age);
}
studentInfo(1, "Raj", 21);
studentInfo(2, "Ramesh");
studentInfo(3);
studentInfo();
