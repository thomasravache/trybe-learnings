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

  honk(): string {
    return 'BIIIII';
  };

  openTheDoor(numberOfDoor: number): string {
    return `Abrindo a porta ${numberOfDoor}`;
  };

  closeTheDoor(numberOfDoor: number): string {
    return `Fechando a porta ${numberOfDoor}`;
  };

  turnOn(): string {
    return 'Ligando o carro...';
  }

  turnOff(): string {
    return 'Desligando o carro...';
  };

  speedUp(): string {
    return 'Acelerando o carro...';
  };

  speedDown(): string {
    return 'Reduzindo velocidade...';
  };

  stop(): string {
    return 'Parando o carro.';
  };

  turn(direction: string): string {
    return `Virando o carro para à ${direction}`;
  };
};