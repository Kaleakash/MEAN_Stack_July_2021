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
var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    Employee.prototype.dis = function () {
        console.log("employee function");
        console.log("id is " + this.id);
        console.log("name is " + this.name);
    };
    return Employee;
}());
var emp1 = new Employee(100, "Raj");
emp1.dis();
var emp2 = new Employee(101, "Raju");
emp2.dis();
console.log(emp1.id); // access id property 
emp1.id = -102; // change id property value 
console.log(emp1.id); // get updated value
