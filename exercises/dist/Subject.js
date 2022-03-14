"use strict";
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
const subject1 = new Subject('Matemática');
const subject2 = new Subject('História');
const subject3 = new Subject('Filosofia');
console.log(subject1.name);
