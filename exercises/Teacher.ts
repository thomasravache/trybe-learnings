import { Person } from './Person';
import { IEmployee } from './Employee';
import { Subject, subject1, subject2, subject3 } from './Subject';
import { Month } from './Student';

class Teacher extends Person implements IEmployee {
  private _registration: string;
  private _salary: number;
  private _admissionDate: Date;
  private _subject: Subject;

  constructor(
    name: string,
    birthDate: Date,
    salary: number,
    subject: Subject
  ) {
    super(name, birthDate);

    if (salary < 0) throw new Error('Salário não pode ser negativo');

    this._salary = salary;
    this._subject = subject;
    this._registration = Math.random().toFixed(16).slice(2);
    this._admissionDate = new Date();
  }

  public get subject(): Subject {
    return this._subject;
  }

  public get registration(): string {
    return this._registration;
  }

  public generateRegistration(): string {
    this._registration = Math.random().toFixed(16).slice(2);
    return this._registration;
  }

  public get salary(): number {
    return this._salary;
  }

  public setSalary(newSalary: number): void {
    if (newSalary < 0) throw new Error('Salário não pode ser negativo');
    this._salary = newSalary;
  }

  public get admissionDate(): Date {
    return this._admissionDate;
  }
}

const teacher: Teacher = new Teacher('Lenite', new Date(1980, Month.abril, 25), 2500, subject1);

console.log(teacher.admissionDate);
