import { Evaluation } from './Evaluation';

export class EvaluationResult {
  private _evaluation: Evaluation;
  private _score: number;

  constructor(evaluation: Evaluation, score: number) {
    if (score > evaluation.score) throw new Error(`A nota máxima para essa avaliação é ${evaluation.score}`);

    this._evaluation = evaluation;
    this._score = score;
  }

  public get evaluation(): Evaluation {
    return this._evaluation;
  }

  public setEvaluation(value: Evaluation): void {
    this._evaluation = value;
  }

  public get score(): number {
    return this._score;
  }

  public setScore(value: number): void {
    if (value > this._evaluation.score) throw new Error(`A nota máxima para essa avaliação é ${this._evaluation.score}`);
    this._score = value;
  }
}