describe("Testing Hook ",()=> {
        beforeAll(()=> {
            console.log("It call before all it function only once")
        })
        beforeEach(()=> {
            console.log("It call before each it function")
        })
        it("1st testing function ",()=> {
            console.log("1st testing function")
        })
        it("2nd testing function ",()=> {
            console.log("1st testing function")
        })
        afterEach(()=> {
            console.log("It call after each it function")
        })
        afterAll(()=> {
            console.log("it all after all it function only once ")
        })
})