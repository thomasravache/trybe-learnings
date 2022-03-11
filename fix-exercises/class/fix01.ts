interface Tv {
  _brand: string;
  _size: number;
  _resolution: string;
  _connections: string[];
  _connectedTo: string;
}

class Tv {
  constructor(brand: string, size: number, resolution: string, connections: string[]) {
    this._brand = brand;
    this._size = size;
    this._resolution = resolution;
    this._connections = connections;
  }

  turnOn():void {
    console.log(Object.values(this));
  }
}

const myTv = new Tv('LG', 40, 'Full HD', ['HDMI', 'Ethernet']);

myTv.turnOn();
