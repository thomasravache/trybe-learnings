"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, birthDate) {
        const today = new Date();
        const isMoreThan120 = today.getFullYear() - birthDate.getFullYear() > 120;
        const nameValidation = name.length <= 3;
        const isMoreThanToday = today.getTime() - birthDate.getTime() < 0;
        // console.log(nameValidation, isMoreThanToday, isMoreThan120);
        if (nameValidation || isMoreThanToday || isMoreThan120)
            throw new Error('Problema no constructor!');
        this._birthDate = birthDate;
        this._name = name;
    }
    get name() {
        return this._name;
    }
    setName(newName) {
        if (newName.length <= 3)
            throw new Error('Nome deve ter no mínimo 3 caracteres');
        this._name = newName;
    }
    get birthDate() {
        return this._birthDate;
    }
    setBirthDate(newBirthDate) {
        const today = new Date();
        const hasMoreThan120Years = today.getFullYear() - newBirthDate.getFullYear() > 120;
        const isMoreThanToday = today.getTime() - newBirthDate.getTime() < 0;
        if (isMoreThanToday)
            throw new Error('Data deve ser menor que a atual');
        if (hasMoreThan120Years)
            throw new Error('Deve ter menos de 120 anos');
        this._birthDate = newBirthDate;
    }
}
exports.Person = Person;
// const date1 = new Date(1998, 6, 27);
// const date2 = new Date(1900, 6, 27);
// console.log(date1.toDateString());
// const person1 = new Person('Thomas', date1);
// const person2 = new Person('Mano', date2);
// console.log(person1.name);
// console.log(person1.setBirthDate(date2));
// console.log(person2.birthDate);
