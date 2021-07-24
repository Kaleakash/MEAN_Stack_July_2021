// let empStringFormat = '{"id":100,"name":"Ravi"}';
// document.write("<br/>")
// document.write(empStringFormat)
// document.write("<br/>")
// document.write(empStringFormat.id)
// // converting string to json 
// let empJsonformat = JSON.parse(empStringFormat);
// document.write("<br/>")
// document.write(empJsonformat)
// document.write("<br/>")
// document.write(empJsonformat.id)
// document.write("<br/>")
// document.write(empJsonformat.name)
// // converting json to string 
// let empStringFormat1 = JSON.stringify(empJsonformat);
// document.write("<br/>")
// document.write(empStringFormat1)
// document.write("<br/>")
// document.write(empStringFormat1.id)

// Literal style object creation in ES5 JavaSript
let emp = {id:1,name:"Ramesh",age:21};
document.write("literal style")
document.write("<br/>id is "+emp.id)
document.write("<br/>Name is "+emp.name)
document.write("<br/>age is "+emp.age)
// coverting object literal style to string format.  
let empString = JSON.stringify(emp);
// convert string to json format 
let empJson = JSON.parse(empString);
document.write("<br/>JSON style")
document.write("<br/>id is "+empJson.id)
document.write("<br/>Name is "+empJson.name)
document.write("<br/>age is "+empJson.age)
