// import { Person } from './Person';
import { Employee } from './Employee';
import { Subject, subject1 } from './Subject';
import { Months } from './enums/Months';

export class Teacher extends Employee {
  private _subject: Subject;

  constructor(
    name: string,
    birthDate: Date,
    salary: number,
    subject: Subject
  ) {
    super(name, birthDate, salary);

    this._subject = subject;
  }

  public get subject(): Subject {
    return this._subject;
  }
}

const teacher: Teacher = new Teacher('Lenite', new Date(1980, Months.abril, 25), 2500, subject1);

console.log(teacher.admissionDate);
console.log(teacher.subject.name);
