"use strict";
// interface Tv {
//   _brand: string;
//   _size: number;
//   _resolution: string;
//   _connections: string[];
//   _connectedTo: string;
// }
class Tv {
    constructor(brand, size, resolution, connections) {
        this._connectedTo = ''; // ou private _connectedTo!: string;
        this._brand = brand;
        this._size = size;
        this._resolution = resolution;
        this._connections = connections;
        // this._connectedTo = ''
    }
    get connectedTo() {
        return this._connectedTo;
    }
    set connectedTo(value) {
        if (this._connections.includes(value)) {
            this._connectedTo = value;
            console.log(this._connectedTo);
            return;
        }
        console.log('Connection unavailable');
    }
    turnOn() {
        console.log(`${this._brand} ${this._size} ${this._resolution} ${this._connections}`);
    }
}
const myTv = new Tv('LG', 40, 'Full HD', ['HDMI', 'Ethernet']);
myTv.turnOn();
myTv.connectedTo = 'HDMI';
