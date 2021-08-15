"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.abc = exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.display = function () {
        console.log("Employee class part of info file");
    };
    return Employee;
}());
exports.Employee = Employee;
exports.abc = 100;
var add = function (a, b) { return a + b; };
exports.add = add;
