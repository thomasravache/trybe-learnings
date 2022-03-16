import { Teacher } from './Teacher';
import { Evaluation } from './Evaluation';

export class Work extends Evaluation {
  constructor(score: number, teacher: Teacher) {
    super(score, teacher);

    if (score > 50) throw new Error('A pontuação não pode passar de 50 pontos');
  }
}
