type ExamNotes = [number, number, number, number];
type WorkNotes = [number, number];

export class Student {
  private _name: string;
  private _registration: string;
  private _examNotes: ExamNotes;
  private _workNotes: WorkNotes;

  constructor(
    name: string,
    registration: string,
    examNotes: ExamNotes,
    workNotes: WorkNotes,
  ) {
    this._name = name;
    this._registration = registration;
    this._examNotes = examNotes;
    this._workNotes = workNotes;
  }

  public getName(): string {
    return this._name;
  }

  public getRegistration(): string {
    return this._registration;
  }

  private sumNotes(): number {
    const sumOfExamNotes = this._examNotes
      .reduce((acc, curr) => acc + curr, 0);
    const sumOfWorkNotes = this._workNotes
      .reduce((acc, curr) => acc + curr, 0);

    return sumOfExamNotes + sumOfWorkNotes;
  }

  public average(): number {
    const numberOfElements = this._examNotes.length + this._workNotes.length;

    return this.sumNotes() / numberOfElements;
  }
}

const student1 = new Student('Thomas Ravache', '1º Semestre', [10, 7, 8, 9], [10, 10]);

console.log(student1.getName());
console.log(student1.getRegistration());
console.log(student1.average());
