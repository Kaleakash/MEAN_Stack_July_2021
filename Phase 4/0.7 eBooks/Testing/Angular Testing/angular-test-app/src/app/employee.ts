// This class help to map the json data from REST API. 
export class Employee {
    constructor(public id:number,
        public employee_name:string,
        public employee_salary:number,
        public employee_age:number,
        public profile_image:string){}
}

export class EmployeeInfo {
    constructor(public status:string,
        public data:Employee[]){

        }
}
