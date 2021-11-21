describe("Operation Testing ",()=> {

    xit("Addition of two numbers",()=> {
        var a = prompt("enter the value of a")
        var b = prompt("enter the value of b")
        var output = prompt("Expectation output")
        var result = add(eval(a),eval(b));
        expect(eval(output)).toEqual(result);
    })

    xit("Substraction of two numbers",()=> {
        var result = sub(100,50);
        expect(result).toEqual(result);
    })
    
    xit("Number of argument passing test ",()=> {
    var leng = numberOfArgumentLength(1,2,3,4);
        expect(4).toEqual(leng);
    })

    xit("Sum of numbers testing ",()=> {
        var sum = sumOfNumber(10,20);
        expect(30).toEqual(sum);
    })

    it("Bonus testing function ",()=> {
        var updatedSalary = bonus(100,"Raj",45000,"Manager");
        expect(50000).toEqual(updatedSalary);
    })
})