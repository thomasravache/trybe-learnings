type ExamNotes = [number, number, number, number];
type WorkNotes = [number, number];

interface StudentProps {
  _name: string;
  _registration: string;
  _examNotes: ExamNotes,
  _workNotes: WorkNotes,
}

class Student implements StudentProps {
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

  
}