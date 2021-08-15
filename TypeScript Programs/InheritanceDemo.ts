// class Employee {
//     disEmp(): void {
//         console.log("Employee function")
//     }
// }
// class Manager extends Employee{
//     disMgr(): void {
//         console.log("Manager function")
//     }
// }
// let emp1 = new Employee();
// let mgr1 = new Manager();
// emp1.disEmp();
// mgr1.disMgr();
// mgr1.disEmp();


// interface Bank {
//     withdraw():void;
//     deposit(): void;
// }
// class Sbi implements Bank{
//     withdraw(): void {

//     }
//     deposit() : void {

//     }
// }
// class Hsbc implements Bank {
        
//         withdraw(): void {

//         }
//         deposit(): void {

//         }
// }

interface EmployeeType {
    id:number;
    name:string;
    salary:number;
    age?:number;
}

// literal style object creation. 
let emp1:EmployeeType = {id:100,name:"Ravi",salary:24000,age:21};
let emp2:EmployeeType = {id:101,name:"Ramesh",salary:24000};
let emp3:EmployeeType = {id:102,name:"Raju",salary:18000,age:34};











