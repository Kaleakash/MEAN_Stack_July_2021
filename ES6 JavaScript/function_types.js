// Normal function 
function display1() {
    document.write("This is normal function display1()")
}
display1();

// expression style function with name
let dis2 = function display2() {
    document.write("<br/> Express style function with name")
}
//display2();
dis2();

// expression style function without name (anonymous)
let dis3 = function() {
    document.write("<br> Anonymous expression style function")
}
dis3();
// expression style function with parameter 
let addNumber1 = function(a,b){
    let sum = a+b;
    return sum;
}
let a=100;
let b=200;
document.write("<br> Sum of two number using expression style "+addNumber1(a,b));
// arrow function : arrow function is a replacement of expression 
// style function or short cut expression style function. 
let dis4 = ()=>document.write("<br/>Arrow function")
dis4();
// arrow style function with parameter : arrow function by default return the value 
//without return keyword if you write one statement. 
let addNumber2 = (a,b)=>a+b;
document.write("<br/>Sum of two number using arrow style "+addNumber2(a,b));
let findLargest=(a,b)=> {
    if(a>b){
            return "A is largest"
    }else {
            return "B is largest"
    }
}
document.write("<br> Arrow style with parameter and multi line statement "+findLargest(20,10))



function greeting(fname,callback){
    return "Welcome "+callback(fname);
}

function maleInfo(fname){
    return "Mr "+fname;
}
let femaleInfo=function (fname){
    return "Miss "+fname;
}
document.write("<br/>")
document.write(greeting("Raj",maleInfo));
document.write("<br/>")
document.write(greeting("Reeta",femaleInfo));
document.write("<br/>");
document.write(greeting("Meeta",function (fname){
    return "Miss "+fname;
}))
document.write("<br/>");
document.write(greeting("Veeta",(fname)=>"Miss "+fname));

