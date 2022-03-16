"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subject3 = exports.subject2 = exports.subject1 = exports.Subject = void 0;
class Subject {
    constructor(name) {
        if (name.length < 3)
            throw new Error('nome deve ter no mínimo 3 caracteres');
        this._name = name;
    }
    get name() {
        return this._name;
    }
    setName(newName) {
        if (newName.length < 3)
            throw new Error('nome deve ter no mínimo 3 caracteres');
        this._name = newName;
    }
}
exports.Subject = Subject;
exports.subject1 = new Subject('Matemática');
exports.subject2 = new Subject('História');
exports.subject3 = new Subject('Filosofia');
const randomString = Math.random().toFixed(16);
console.log(parseInt(randomString.slice(2), 10));
console.log(exports.subject1.name);
