"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvaluationResult = void 0;
class EvaluationResult {
    constructor(evaluation, score) {
        if (score > evaluation.score)
            throw new Error(`A nota máxima para essa avaliação é ${evaluation.score}`);
        this._evaluation = evaluation;
        this._score = score;
    }
    get evaluation() {
        return this._evaluation;
    }
    setEvaluation(value) {
        this._evaluation = value;
    }
    get score() {
        return this._score;
    }
    setScore(value) {
        if (value > this._evaluation.score)
            throw new Error(`A nota máxima para essa avaliação é ${this._evaluation.score}`);
        this._score = value;
    }
}
exports.EvaluationResult = EvaluationResult;
