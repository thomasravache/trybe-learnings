"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Bird extends Animal {
    move() {
        console.log(`${this.name} está voando`);
    }
}
class Mammal extends Animal {
    move() {
        console.log(`${this.name} está andando`);
    }
}
class Fish extends Animal {
    move() {
        console.log(`${this.name} está nadando`);
    }
}
const myMove = (animal) => {
    animal.move();
};
const animalGeneric = new Fish('Tubarão');
const animalBird = new Bird('Papagaio');
const animalMammal = new Mammal('Tatu');
myMove(animalGeneric);
myMove(animalBird);
myMove(animalMammal);
