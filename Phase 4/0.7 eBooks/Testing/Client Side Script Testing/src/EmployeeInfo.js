class Employee {
    constructor(id,name,salary,add){
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.add = add;
    }
    getSalary() {
        return this.salary;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getGrossSalary() {
        let hra = 0.10*salary;
        let da = 0.05*salary;
        let pf  = 0.07*salary;
        salary = salary+hra +da - pf;
        return salary;
    }
    getAddress() {
        return this.add;
    }
    getInfo() {
        
    }
}
class Address {
    constructor(city,state){
        this.city = city;
        this.state = state;
    }
    getCity() {
        return this.city;
    }
    getState() {
        return this.state;
    }
    getAddress() {
        return new Address(this.city,this.state);
    }
}