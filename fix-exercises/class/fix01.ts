// interface Tv {
//   _brand: string;
//   _size: number;
//   _resolution: string;
//   _connections: string[];
//   _connectedTo: string;
// }

class Tv {
  private _brand: string;
  private _size: number;
  private _resolution: string;
  private _connections: string[];
  private _connectedTo!: string;

  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  get connectedTo(): string {
    return this._connectedTo;
  }

  set connectedTo(value: string) {
    if (this._connections.includes(value)) {
      this._connectedTo = value;
      console.log(this._connectedTo);
      return;
    }
    console.log('Connection unavailable');
  }

  turnOn():void {
    console.log(`${this._brand} ${this._size} ${this._resolution} ${this._connections}`);
  }
}

const myTv = new Tv('LG', 40, 'Full HD', ['HDMI', 'Ethernet']);

myTv.turnOn();
myTv.connectedTo = 'HDMI';
