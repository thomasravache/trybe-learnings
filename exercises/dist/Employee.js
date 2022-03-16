"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const Person_1 = require("./Person");
class Employee extends Person_1.Person {
    constructor(name, birthDate, salary) {
        if (salary < 0)
            throw new Error('Salário não pode ser negativo');
        super(name, birthDate);
        this._salary = salary;
        this._enrollment = this.generateEnrollment();
        this._admissionDate = new Date();
    }
    get enrollment() {
        return this._enrollment;
    }
    generateEnrollment() {
        const generatedEnrollment = Math.random().toFixed(16).slice(2);
        // this._enrollment = generatedEnrollment;
        return generatedEnrollment;
    }
    get salary() {
        return this._salary;
    }
    setSalary(newSalary) {
        if (newSalary < 0)
            throw new Error('Salário não pode ser negativo');
        this._salary = newSalary;
    }
    get admissionDate() {
        return this._admissionDate;
    }
}
exports.Employee = Employee;
