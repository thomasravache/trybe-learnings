"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Work = void 0;
const Evaluation_1 = require("./Evaluation");
class Work extends Evaluation_1.Evaluation {
    constructor(score, teacher) {
        super(score, teacher);
        if (score > 50)
            throw new Error('A pontuação não pode passar de 50 pontos');
    }
}
exports.Work = Work;
