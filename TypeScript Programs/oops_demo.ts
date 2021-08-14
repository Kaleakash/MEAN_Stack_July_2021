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
class Employee {
        constructor() {
              console.log("memory created...")  
        }
        display(): void {
            console.log("This is display function")
        }
}
let emp1 = new Employee();
emp1.display();
emp1.display();
emp1.display();
let emp2 = new Employee();
emp2.display();

