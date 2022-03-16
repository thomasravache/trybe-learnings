"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Evaluation = void 0;
class Evaluation {
    constructor(score, teacher) {
        this.validate(score);
        this._score = score;
        this._teacher = teacher;
    }
    validate(score) {
        if (score < 0)
            throw new Error('Score não pode ser negativo');
    }
    get score() {
        return this._score;
    }
    setScore(newScore) {
        this._score = newScore;
    }
    get teacher() {
        return this._teacher;
    }
    setTeacher(teacher) {
        this._teacher = teacher;
    }
}
exports.Evaluation = Evaluation;
