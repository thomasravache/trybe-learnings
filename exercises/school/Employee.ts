import { Enrollable } from 'school/interfaces/Enrollable';
import { IEmployee } from './interfaces/Employee';
import { Person } from './Person';

export abstract class Employee extends Person implements Enrollable, IEmployee {
  private _enrollment: string;
  private _salary: number;
  private _admissionDate: Date;

  constructor(
    name: string,
    birthDate: Date,
    salary: number,
  ) {
    if (salary < 0) throw new Error('Salário não pode ser negativo');

    super(name, birthDate);

    this._salary = salary;
    this._enrollment = this.generateEnrollment();
    this._admissionDate = new Date();
  }

  public get enrollment(): string {
    return this._enrollment;
  }

  public generateEnrollment(): string {
    const generatedEnrollment = Math.random().toFixed(16).slice(2);
    // this._enrollment = generatedEnrollment;
    return generatedEnrollment;
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
