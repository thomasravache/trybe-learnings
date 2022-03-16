import { Teacher } from './Teacher';
import { Evaluation } from './Evaluation';

export class Exam extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score, teacher);

    if (score > 25) throw new Error('A pontuação não pode passar de 25 pontos');
  }
}