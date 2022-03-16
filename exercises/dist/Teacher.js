"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
// import { Person } from './Person';
const Employee_1 = require("./Employee");
const Subject_1 = require("./Subject");
const Months_1 = require("./enums/Months");
class Teacher extends Employee_1.Employee {
    constructor(name, birthDate, salary, subject) {
        super(name, birthDate, salary);
        this._subject = subject;
    }
    get subject() {
        return this._subject;
    }
}
exports.Teacher = Teacher;
const teacher = new Teacher('Lenite', new Date(1980, Months_1.Months.abril, 25), 2500, Subject_1.subject1);
console.log(teacher.admissionDate);
console.log(teacher.subject.name);
