describe("Employee class Testing ",()=> {
    it("employee property testing ",()=> {
        let add = new Address("Bangalore","Kar");
        let emp = new Employee(100,"Raj",12000,add);
        expect(emp.getId()).toEqual(100); 
        expect(emp.getName()).toBe("Raj") 
        expect(emp.getSalary()).toBeGreaterThan(10000);     
        //expect(emp.getSalary()).toBe(undefined); 
        //expect(emp.getInfo()).toBeNaN();
    })

    it("Address property testing ", ()=> {
      let add = new Address("Bangalore","Kar");
      expect(add.getCity()).toEqual("Bangalore");
      expect(add.getState()).toEqual("Kar");  
    })
})