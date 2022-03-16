import { Months } from './enums/Months';
import { EvaluationResult } from './EvaluationResult';
import { Exam } from './Exam';
import { Student } from './Student';
import { Subject } from './Subject';
import { Work } from './Work';
import { Teacher } from './Teacher';

console.log('--------------INDEX------------');

const newTeacher = new Teacher('Thomas Ravache', new Date(1998, Months.julho, 27), 3000, new Subject('Programação'));
const newStudent = new Student('Jerônimo', new Date(2000, Months.janeiro, 5));

const exam1 = new Exam(10, newTeacher);
const work1 = new Work(10, newTeacher);

const examResult = new EvaluationResult(exam1, 7.5);
const workResult = new EvaluationResult(work1, 9);

newStudent.setEvaluationResults([examResult, workResult]);
console.log(`A média do ${newStudent.name} na matéria de ${newTeacher.subject.name} é: ${newStudent.sumAverageNotes()}`);
