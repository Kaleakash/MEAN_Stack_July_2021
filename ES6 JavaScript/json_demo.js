let empStringFormat = '{"id":100,"name":"Ravi"}';
document.write("<br/>")
document.write(empStringFormat)
document.write("<br/>")
document.write(empStringFormat.id)
// converting string to json 
let empJsonformat = JSON.parse(empStringFormat);
document.write("<br/>")
document.write(empJsonformat)
document.write("<br/>")
document.write(empJsonformat.id)
document.write("<br/>")
document.write(empJsonformat.name)
// converting json to string 
let empStringFormat1 = JSON.stringify(empJsonformat);
document.write("<br/>")
document.write(empStringFormat1)
document.write("<br/>")
document.write(empStringFormat1.id)

