let obj = require("../src/operation.js");
//let obj = require("../../src/operation.js`")
describe("Operation Testing ",()=> {

    it("Addition testing ",()=> {
        let result = obj.add(100,200);
        expect(300).toBe(result);
    })

    it("Substaction testing",()=> {
        let result = obj.sub(20,10);
        expect(10).toBe(result);
    })
    it("multiplication",()=> {
        let result = obj.mul(4,5);
        expect(20).toBe(result);
    })

    it("division",()=> {
        let result = obj.div(10,5);
        expect(2).toBe(result);
    })
})