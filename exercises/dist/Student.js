"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_1 = require("./Person");
const Months_1 = require("./enums/Months");
const EvaluationResult_1 = require("./EvaluationResult");
const Exam_1 = require("./Exam");
const Teacher_1 = require("./Teacher");
const Subject_1 = require("./Subject");
class Student extends Person_1.Person {
    constructor(name, birthDate) {
        super(name, birthDate);
        this._enrollment = this.generateEnrollment();
        this._evaluationsResults = [];
    }
    generateEnrollment() {
        return this._enrollment = Math.random().toFixed(16).slice(2);
    }
    get enrollment() {
        return this._enrollment;
    }
    setEvaluationResults(evaluationResults) {
        if (evaluationResults.length > 6)
            throw new Error('Limite máximo atingido');
        this._evaluationsResults = evaluationResults;
    }
    sumNotes() {
        const sumOfEvaluationResults = this._evaluationsResults
            .reduce((acc, curr) => acc + curr.score, 0);
        return sumOfEvaluationResults;
    }
    sumAverageNotes() {
        const numberOfElements = this._evaluationsResults.length;
        if (!numberOfElements)
            return 'Não registrado';
        return (this.sumNotes() / numberOfElements).toFixed(2);
    }
}
exports.Student = Student;
// const date1 = new Date(1998, Month.julho, 27)
const student1 = new Student('Thomas Ravache', new Date(1998, Months_1.Months.julho, 27));
const student2 = new Student('Maluco beleza', new Date(1997, Months_1.Months.abril, 5));
const student3 = new Student('Chapa quente', new Date(1995, Months_1.Months.dezembro, 20));
const student4 = new Student('Boris Johnson', new Date(1990, Months_1.Months.agosto, 2));
const student5 = new Student('Mano Brown', new Date(2000, Months_1.Months.janeiro, 8));
const subject = new Subject_1.Subject('Historia');
const teacher10 = new Teacher_1.Teacher('Thomas', new Date(1990, Months_1.Months.abril, 5), 6000, subject);
const evaluation = new Exam_1.Exam(10, teacher10);
const evaluationResult = new EvaluationResult_1.EvaluationResult(evaluation, 10);
student1.setEvaluationResults([evaluationResult]);
console.log(student1.sumNotes());
console.log(student1.sumAverageNotes());
