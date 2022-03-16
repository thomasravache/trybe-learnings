import { Teacher } from './Teacher';

export abstract class Evaluation {
  private _score: number;
  private _teacher: Teacher;

  constructor(score: number, teacher: Teacher) {
    this.validate(score);

    this._score = score;
    this._teacher = teacher;
  }

  private validate(score: number) {
    if (score < 0) throw new Error('Score não pode ser negativo');
  }

  public get score(): number {
    return this._score;
  }

  public setScore(newScore: number): void {
    this._score = newScore;
  }

  public get teacher(): Teacher {
    return this._teacher;
  }

  public setTeacher(teacher: Teacher): void {
    this._teacher = teacher;
  }
}