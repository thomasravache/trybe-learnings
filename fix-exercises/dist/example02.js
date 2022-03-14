"use strict";
class Employee {
    constructor(name) {
        this.name = name;
        Employee.addEmployee();
    }
    static addEmployee() {
        this.employeeCount += 1;
    }
    static get employees() {
        return this.employeeCount;
    }
}
Employee.employeeCount = 0;
console.log(Employee.employees);
const employee1 = new Employee('Ronaldo');
console.log(Employee.employees);
const employee2 = new Employee('Jubileu');
console.log(Employee.employees);
