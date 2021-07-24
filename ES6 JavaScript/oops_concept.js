//ES5 style object creation 
// function Employee(){
//     // properites 
//     this.id =100;       // this keyword to defined the property
//     this.fname="Ravi";

//     // behaviour 
//     this.dis = function() {
//         document.write("<br/>Employee Details is")
//         document.write("<br/>id is "+this.id)
//         document.write("<br/> Name is "+this.fname)
//     }

// }
// let obj = new Date();
// let emp1 = new Employee();  //creating object or memory 
// let emp2  = new Employee();
// emp1.dis();         // using object we can call functionaliy 
// emp2.dis();
// alert(emp1.fname);      // using object we can access properties 
// alert(emp2.fname);



function Employee(id,fname){
    // properites 
    this.id =id;       // this keyword to defined the property
    this.fname=fname;

    // behaviour 
    this.dis = function() {
        document.write("<br/>Employee Details is")
        document.write("<br/>id is "+this.id)
        document.write("<br/> Name is "+this.fname)
    }

}
let emp1 = new Employee(101,"Ramesh");
let emp2 = new Employee(102,"Raju");
//dis();
//alert(id)
emp1.dis();
// emp2.dis();
alert(emp1.id)
// alert(emp1.fname)
// alert(emp2.id)
// alert(emp2.fname)

