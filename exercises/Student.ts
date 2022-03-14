import { Person } from './Person';
import crypto from 'crypto';

enum Month {
  janeiro,
  fevereiro,
  março,
  abril,
  maio,
  junho,
  julho,
  agosto,
  setembro,
  outubro,
  novembro,
  dezembro,
}

export class Student extends Person {
  private _enrollment: string;
  private _examGrades: number[];
  private _workGrades: number[];

  constructor(
    name: string,
    birthDate: Date,
  ) {
    super(name, birthDate);
    this._enrollment = crypto.randomBytes(9).toString('hex');
    this._examGrades = [];
    this._workGrades = [];
  }

  public setExamGrades(examGrades: number[]): void {
    if (this._examGrades.length > 4) throw new Error('Limite máximo para notas de prova');
    this._examGrades = examGrades;
  }

  public setWorkGrades(workGrades: number[]): void {
    if (this._workGrades.length > 2) throw new Error('Limite máximo para notas de trabalho');
    this._workGrades = workGrades;
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public generateEnrollment(): string {
    return this._enrollment = crypto.randomBytes(9).toString('hex');
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
const student1 = new Student('Thomas Ravache', new Date(1998, Month.julho, 27));
const student2 = new Student('Maluco beleza', new Date(1997, Month.abril, 5));
const student3 = new Student('Chapa quente', new Date(1995, Month.dezembro, 20));
const student4 = new Student('Boris Johnson', new Date(1990, Month.agosto, 2));
const student5 = new Student('Mano Brown', new Date(2000, Month.janeiro, 8));

student1.setExamGrades([10, 10, 10, 8]);
student1.setWorkGrades([8, 10]);
console.log(student1.sumNotes());
console.log(student1.sumAverageNotes());