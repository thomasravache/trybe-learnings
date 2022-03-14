"use strict";
class Character {
    constructor(name) {
        this.name = name;
    }
}
class MeleeCharacter extends Character {
    talk() {
        console.log(`${this.name} diz: Olá, Sr.`);
    }
    specialMove() {
        console.log(`${this.name} está usando o Soco Supremo!`);
    }
}
class LongRangeCharacter extends Character {
    talk() {
        console.log(`${this.name} diz: Fala aeeeeee`);
    }
    specialMove() {
        console.log(`${this.name} está usando o Rajada de Flechas!`);
    }
}
const myFunc = (character) => {
    character.talk();
    character.specialMove();
};
const melee = new MeleeCharacter('Black Knight');
const ranger = new LongRangeCharacter('Legolas');
myFunc(melee);
myFunc(ranger);
