let supertest = require("supertest");
let obj = require("../../src/app.js")

describe("Express JS Testing",()=> {
    it("Simple Text Message Testing ",(done)=> {
        supertest(obj).get("/simpleMsg").
        expect(200).expect(data=>expect(data.text).toBe("Welcome to Simple Application")).
        end(err=>err?done.fail(err):done());
    })

    it("Simple Text Message Testing ",(done)=> {
        supertest(obj).get("/empInfo").
        expect(200).expect(data=>{
            let emp = data.body;
            expect(100).toBe(emp.id);
            expect("Ravi").toBe(emp.name);
            expect(21).toBe(emp.age);
        }).
        end(err=>err?done.fail(err):done());
    })

})