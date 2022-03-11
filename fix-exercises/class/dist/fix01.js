"use strict";
class Tv {
    constructor(brand, size, resolution, connections) {
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
    }
    turnOn() {
        console.log(Object.values(this));
    }
}
const myTv = new Tv('LG', 40, 'Full HD', ['HDMI', 'Ethernet']);
myTv.turnOn();
