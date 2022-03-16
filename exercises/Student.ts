import { Person } from './Person';
import { Enrollable } from 'interfaces/Enrollable';
import { Months } from './enums/Months';

export class Student extends Person implements Enrollable {
  private _enrollment: string;
  private _examGrades: number[];
  private _workGrades: number[];

  constructor(
    name: string,
    birthDate: Date,
  ) {
    super(name, birthDate);
    this._enrollment = this.generateEnrollment();
    this._examGrades = [];
    this._workGrades = [];
  }
  
  public generateEnrollment(): string {
    return this._enrollment = Math.random().toFixed(16).slice(2);
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public setExamGrades(examGrades: number[]): void {
    if (this._examGrades.length > 4) throw new Error('Limite máximo para notas de prova');
    this._examGrades = examGrades;
  }

  public setWorkGrades(workGrades: number[]): void {
    if (this._workGrades.length > 2) throw new Error('Limite máximo para notas de trabalho');
    this._workGrades = workGrades;
  }

  public sumNotes(): number {
    if (this._examGrades.length > 4) throw new Error('deve possuir no máximo 4 notas de prova');
    const sumOfExamNotes = this._examGrades
      .reduce((acc, curr) => acc + curr, 0);

    if (this._workGrades.length > 2) throw new Error('deve possuir no máximo 2 notas de trabalho');
    const sumOfWorkNotes = this._workGrades
      .reduce((acc, curr) => acc + curr, 0);

    return sumOfExamNotes + sumOfWorkNotes;
  }

  public sumAverageNotes(): string {
    const numberOfElements = this._examGrades.length + this._workGrades.length;

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

student1.setExamGrades([10, 10, 10, 8]);
student1.setWorkGrades([8, 10]);
console.log(student1.sumNotes());
console.log(student1.sumAverageNotes());