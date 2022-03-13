"use strict";
class Bird50 {
    constructor(name, birthDate) {
        this.name = name;
        this._birthDate = birthDate;
    }
    get age() {
        return new Date().getFullYear() - this._birthDate.getFullYear();
    }
    getBirthDate() {
        return this._birthDate;
    }
    fly() {
        console.log(`${this.name} está voando!`);
    }
}
const data1 = new Date();
data1.setFullYear(2015);
const bird1 = new Bird50('Tucano', data1);
console.log(bird1.age);
bird1.fly();
