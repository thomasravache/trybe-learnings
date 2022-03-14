abstract class Animal {
  constructor(public name: string) {  }

  abstract move(): void
}

class Bird extends Animal {
  public move() {
    console.log(`${this.name} está voando`);
  }
}

class Mammal extends Animal {
  public move() {
    console.log(`${this.name} está andando`);
  }
}

class Fish extends Animal {
  public move() {
    console.log(`${this.name} está nadando`)
  }
}

const myMove = (animal: Animal) => {
  animal.move();
}

const animalGeneric = new Fish('Tubarão');
const animalBird = new Bird('Papagaio');
const animalMammal = new Mammal('Tatu');

myMove(animalGeneric);
myMove(animalBird);
myMove(animalMammal);
