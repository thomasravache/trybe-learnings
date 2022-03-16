import { Person } from './Person';
import { Enrollable } from 'school/interfaces/Enrollable';
import { Months } from './enums/Months';
import { EvaluationResult } from './EvaluationResult';
import { Exam } from './Exam';
import { Teacher } from './Teacher';
import { Subject } from './Subject';

export class Student extends Person implements Enrollable {
  private _enrollment: string;
  private _evaluationsResults: EvaluationResult[];

  constructor(
    name: string,
    birthDate: Date,
  ) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
    this._evaluationsResults = [];
  }
  
  public generateEnrollment(): string {
    return this._enrollment = Math.random().toFixed(16).slice(2);
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public setEvaluationResults(evaluationResults: EvaluationResult[]): void {
    if (evaluationResults.length > 6) throw new Error('Limite máximo atingido');
    this._evaluationsResults = evaluationResults;
  }

  public sumNotes(): number {
    const sumOfEvaluationResults = this._evaluationsResults
      .reduce((acc, curr) => acc + curr.score, 0);

    return sumOfEvaluationResults;
  }

  public sumAverageNotes(): string {
    const numberOfElements = this._evaluationsResults.length;

    if (!numberOfElements) return 'Não registrado';

    return (this.sumNotes() / numberOfElements).toFixed(2);
  }
}

// const date1 = new Date(1998, Month.julho, 27)
const student1 = new Student('Thomas Ravache', new Date(1998, Months.julho, 27));
const student2 = new Student('Maluco beleza', new Date(1997, Months.abril, 5));
const student3 = new Student('Chapa quente', new Date(1995, Months.dezembro, 20));
const student4 = new Student('Boris Johnson', new Date(1990, Months.agosto, 2));
const student5 = new Student('Mano Brown', new Date(2000, Months.janeiro, 8));

const subject = new Subject('Historia');
const teacher10 = new Teacher('Thomas', new Date(1990, Months.abril, 5), 6000, subject);
const evaluation = new Exam(10, teacher10);
const evaluationResult = new EvaluationResult(evaluation, 10);

student1.setEvaluationResults([evaluationResult]);
console.log(student1.sumNotes());
console.log(student1.sumAverageNotes());