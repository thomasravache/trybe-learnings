class Animal {
  constructor(public name: string) {  }

  public move(): void {
    console.log(`${this.name} está se movendo`);
  }
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

const myMove = (animal: Animal) => {
  animal.move();
}

const animalGeneric = new Animal('Tubarão');
const animalBird = new Bird('Papagaio');
const animalMammal = new Mammal('Tatu');

myMove(animalGeneric);
myMove(animalBird);
myMove(animalMammal);
