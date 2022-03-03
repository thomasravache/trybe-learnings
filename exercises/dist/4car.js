"use strict";
var Colors;
(function (Colors) {
    Colors[Colors["preta"] = 0] = "preta";
    Colors[Colors["branca"] = 1] = "branca";
    Colors[Colors["vermelha"] = 2] = "vermelha";
    Colors[Colors["prata"] = 3] = "prata";
})(Colors || (Colors = {}));
class Car {
    constructor(brand, color, doors) {
        this._brand = brand;
        this._color = color;
        this._doors = doors;
    }
    ;
    honk() {
        console.log('BIIIII');
    }
    ;
    openTheDoor(numberOfDoor) {
        console.log(`Abrindo a porta ${numberOfDoor}`);
    }
    ;
    closeTheDoor(numberOfDoor) {
        console.log(`Fechando a porta ${numberOfDoor}`);
    }
    ;
    turnOn() {
        console.log('Ligando o carro...');
    }
    turnOff() {
        console.log('Desligando o carro...');
    }
    ;
    speedUp() {
        console.log('Acelerando o carro...');
    }
    ;
    speedDown() {
        console.log('Reduzindo velocidade...');
    }
    ;
    stop() {
        console.log('Parando o carro.');
    }
    ;
    turn(direction) {
        console.log(`Virando o carro para à ${direction}`);
    }
    ;
}
;
const myCar = new Car('Volkswagen Gol', Colors.prata, 4);
myCar.turnOn();
myCar.speedUp();
myCar.turn('esquerda');
myCar.speedUp();
myCar.turn('direita');
myCar.speedDown();
myCar.stop();
