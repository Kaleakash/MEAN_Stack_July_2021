// class Employee {
//         id:number=100;
//         name:string="Raj";
//         dis(): void {
//             console.log("employee function")
//             console.log("id is "+this.id);
//             console.log("name is "+this.name);
//         }
// }
// let emp1 = new Employee();
// emp1.dis();
// let emp2 = new Employee();
// emp2.dis();

// creating memory with constructor 
// class Employee {
//         constructor() {
//               console.log("memory created...")  
//         }
//         display(): void {
//             console.log("This is display function")
//         }
// }
// let emp1 = new Employee();
// emp1.display();
// emp1.display();
// emp1.display();
// let emp2 = new Employee();
// emp2.display();

// parameterized constructor 
// class Employee {
//         private id:number;
//         public name:string;
//         constructor(id:number, name:string){
//                 this.id = id;
//                 this.name = name;
//         }
//         dis(): void {
//             console.log("employee function")
//             console.log("id is "+this.id);
//             console.log("name is "+this.name);
//         }
// }
// let emp1 = new Employee(100,"Raj");
// emp1.dis();
// let emp2 = new Employee(101,"Raju");
// emp2.dis();
//console.log(emp1.id)    // access id property 
//emp1.id=-102;            // change id property value 
//console.log(emp1.id);   // get updated value

// constructor short cut initializaton 
class Employee {
   // private id:number;
    //private name:string;
    //private age:number;     // instance varaible 
    constructor(private id:number,public name:string,private age:number){      // local variable 
            //this.id = id;
            //this.name = name;
           // this.age = age;
    }
    dis():void {
        console.log("id is "+this.id);
        console.log("name is "+this.name);
        console.log("age is "+this.age);
    }
}
let emp1 = new Employee(100,"Raj",21);
emp1.dis();


