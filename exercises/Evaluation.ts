import { Teacher } from './Teacher';

type evaluationType = 'prova' | 'trabalho';

class Evaluation {
  private _score: number;
  private _teacher: Teacher;
  private _type: evaluationType;

  constructor(score: number, teacher: Teacher, type: evaluationType) {
    this.validate(score, type);

    this._score = score;
    this._teacher = teacher;
    this._type = type;
  }

  private validate(score: number, type: evaluationType) {
    const types = ['prova', 'trabalho'];
    if (!types.includes(type)) throw new Error('Tipo de avaliação inválida');
    if (score < 0) throw new Error('Score não pode ser negativo');
    if (type === 'prova' && score > 25) throw new Error('Avaliação do tipo prova não pode passar de 25 pontos');
    if (type === 'trabalho' && score > 50) throw new Error('Avaliação do tipo trabalho não pode passar de 50 pontos');
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

  public get type(): evaluationType {
    return this._type;
  }

  public setType(type: evaluationType): void {
    this.validate(this._score, type);

    this._type = type;
  }
}

class EvaluationResult {
  private _evaluation: Evaluation;
  private _score: number;

  constructor(evaluation: Evaluation, score: number) {
    this.validateScore(score, evaluation);

    this._evaluation = evaluation;
    this._score = score;
  }

  private validateScore(score: number, evaluation: Evaluation): void {
    if (score < 0) throw new Error('Pontuação deve ser positiva');
    if (evaluation.type === 'prova' && score > 25) throw new Error('Avaliação do tipo prova não pode passar de 25 pontos');
    if (evaluation.type === 'trabalho' && score > 50) throw new Error('Avaliação do tipo trabalho não pode passar de 50 pontos');
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

    this._score = value;
  }
}