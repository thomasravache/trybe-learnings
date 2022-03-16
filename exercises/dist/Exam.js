"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
const Evaluation_1 = require("./Evaluation");
class Exam extends Evaluation_1.Evaluation {
    constructor(score, teacher) {
        super(score, teacher);
        if (score > 25)
            throw new Error('A pontuação não pode passar de 25 pontos');
    }
}
exports.Exam = Exam;
