"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = exports.Month = void 0;
const Person_1 = require("./Person");
var Month;
(function (Month) {
    Month[Month["janeiro"] = 0] = "janeiro";
    Month[Month["fevereiro"] = 1] = "fevereiro";
    Month[Month["mar\u00E7o"] = 2] = "mar\u00E7o";
    Month[Month["abril"] = 3] = "abril";
    Month[Month["maio"] = 4] = "maio";
    Month[Month["junho"] = 5] = "junho";
    Month[Month["julho"] = 6] = "julho";
    Month[Month["agosto"] = 7] = "agosto";
    Month[Month["setembro"] = 8] = "setembro";
    Month[Month["outubro"] = 9] = "outubro";
    Month[Month["novembro"] = 10] = "novembro";
    Month[Month["dezembro"] = 11] = "dezembro";
})(Month = exports.Month || (exports.Month = {}));
class Student extends Person_1.Person {
    constructor(name, birthDate) {
        super(name, birthDate);
        this._enrollment = this.generateEnrollment();
        this._examGrades = [];
        this._workGrades = [];
    }
    generateEnrollment() {
        return this._enrollment = Math.random().toFixed(16).slice(2);
    }
    get enrollment() {
        return this._enrollment;
    }
    setExamGrades(examGrades) {
        if (this._examGrades.length > 4)
            throw new Error('Limite máximo para notas de prova');
        this._examGrades = examGrades;
    }
    setWorkGrades(workGrades) {
        if (this._workGrades.length > 2)
            throw new Error('Limite máximo para notas de trabalho');
        this._workGrades = workGrades;
    }
    sumNotes() {
        if (this._examGrades.length > 4)
            throw new Error('deve possuir no máximo 4 notas de prova');
        const sumOfExamNotes = this._examGrades
            .reduce((acc, curr) => acc + curr, 0);
        if (this._workGrades.length > 2)
            throw new Error('deve possuir no máximo 2 notas de trabalho');
        const sumOfWorkNotes = this._workGrades
            .reduce((acc, curr) => acc + curr, 0);
        return sumOfExamNotes + sumOfWorkNotes;
    }
    sumAverageNotes() {
        const numberOfElements = this._examGrades.length + this._workGrades.length;
        if (!numberOfElements)
            return 'Não registrado';
        return (this.sumNotes() / numberOfElements).toFixed(2);
    }
}
exports.Student = Student;
// const date1 = new Date(1998, Month.julho, 27)
const student1 = new Student('Thomas Ravache', new Date(1998, Month.julho, 27));
const student2 = new Student('Maluco beleza', new Date(1997, Month.abril, 5));
const student3 = new Student('Chapa quente', new Date(1995, Month.dezembro, 20));
const student4 = new Student('Boris Johnson', new Date(1990, Month.agosto, 2));
const student5 = new Student('Mano Brown', new Date(2000, Month.janeiro, 8));
student1.setExamGrades([10, 10, 10, 8]);
student1.setWorkGrades([8, 10]);
console.log(student1.sumNotes());
console.log(student1.sumAverageNotes());
