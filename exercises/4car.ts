enum Colors {
  preta,
  branca,
  vermelha,
  prata,
}

interface Car {
  _brand: string;
  _color: Colors;
  _doors: number;
}

class Car {
  constructor(brand: string, color: Colors, doors: number) {
    this._brand = brand;
    this._color = color;
    this._doors = doors;
  };

  honk(): void {
    console.log('BIIIII');
  };

  openTheDoor(numberOfDoor: number): void {
    console.log(`Abrindo a porta ${numberOfDoor}`);
  };

  closeTheDoor(numberOfDoor: number): void {
    console.log(`Fechando a porta ${numberOfDoor}`);
  };

  turnOn(): void {
    console.log('Ligando o carro...');
  }

  turnOff(): void {
    console.log('Desligando o carro...');
  };

  speedUp(): void {
    console.log('Acelerando o carro...');
  };

  speedDown(): void {
    console.log('Reduzindo velocidade...');
  };

  stop(): void {
    console.log('Parando o carro.');
  };

  turn(direction: string): void {
    console.log(`Virando o carro para à ${direction}`);
  };
};

const myCar = new Car('Volkswagen Gol', Colors.prata, 4);

myCar.turnOn();
myCar.speedUp();
myCar.turn('esquerda');
myCar.speedUp();
myCar.turn('direita');
myCar.speedDown();
myCar.stop();
