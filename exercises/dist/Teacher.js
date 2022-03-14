"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
const Subject_1 = require("./Subject");
const Student_1 = require("./Student");
class Teacher extends Person_1.Person {
    constructor(name, birthDate, salary, subject) {
        super(name, birthDate);
        if (salary < 0)
            throw new Error('Salário não pode ser negativo');
        this._salary = salary;
        this._subject = subject;
        this._registration = Math.random().toFixed(16).slice(2);
        this._admissionDate = new Date();
    }
    get subject() {
        return this._subject;
    }
    get registration() {
        return this._registration;
    }
    generateRegistration() {
        this._registration = Math.random().toFixed(16).slice(2);
        return this._registration;
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
const teacher = new Teacher('Lenite', new Date(1980, Student_1.Month.abril, 25), 2500, Subject_1.subject1);
console.log(teacher.admissionDate);
