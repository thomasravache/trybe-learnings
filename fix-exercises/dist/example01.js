"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} está se movendo`);
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
const myMove = (animal) => {
    animal.move();
};
const animalGeneric = new Animal('Tubarão');
const animalBird = new Bird('Papagaio');
const animalMammal = new Mammal('Tatu');
myMove(animalGeneric);
myMove(animalBird);
myMove(animalMammal);
