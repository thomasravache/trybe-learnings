"use strict";
// interface Student {
//   _name: string;
//   _registration: string;
//   _examNotes: ExamNotes,
//   _workNotes: WorkNotes,
// }
class Student {
    constructor(name, registration, examNotes, workNotes) {
        this._name = name;
        this._registration = registration;
        this._examNotes = examNotes;
        this._workNotes = workNotes;
    }
    getName() {
        return this._name;
    }
    getRegistration() {
        return this._registration;
    }
    sumNotes() {
        const sumOfExamNotes = this._examNotes
            .reduce((acc, curr) => acc + curr, 0);
        const sumOfWorkNotes = this._workNotes
            .reduce((acc, curr) => acc + curr, 0);
        return sumOfExamNotes + sumOfWorkNotes;
    }
    average() {
        const numberOfElements = this._examNotes.length + this._workNotes.length;
        return this.sumNotes() / numberOfElements;
    }
}
const student1 = new Student('Thomas Ravache', '1º Semestre', [10, 7, 8, 9], [10, 10]);
console.log(student1.getName());
console.log(student1.getRegistration());
console.log(student1.average());
