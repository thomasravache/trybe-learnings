"use strict";
class Animal2 {
    constructor(birthDate) {
        this.birthDate = birthDate;
    }
}
class Bird2 extends Animal2 {
    showBirthDate() {
        // console.log(this.birthDate); // Erro
    }
}
class Animal3 {
    constructor(birthDate) {
        this.birthDate = birthDate;
    }
}
class Bird3 extends Animal3 {
    showBirthDate() {
        console.log(this.birthDate); // Ok!
    }
}
