class Passenger {
  constructor (public nome:string, public cpf:number) { }
}

class ShippedItem {
  constructor (public nome:string, public id:number, public customerID:string) { 

  }
}

abstract class Flight<T> {
  constructor (public num:number) { }

  abstract Add(newAnything: T): void;
  abstract Remove(removedAnything: T): void;
}

class PleasureFlight extends Flight<Passenger> {
  constructor(public num: number, public passengers: Passenger[]) {
    super(num);
  }

  Add(newPassenger:Passenger): void {
    this.passengers.push(newPassenger); 
  }

  Remove(removedPassenger: Passenger): void {
    const index = this.passengers.indexOf(removedPassenger, 0);
    if (index > -1) {
      this.passengers.splice(index, 1);
    }
  }
}

class BusinessFlight extends Flight<ShippedItem> {
  constructor(public num: number, public shippedItems: ShippedItem[]) {
    super(num);
  }

  Add(newShippedItem:ShippedItem): void {
    this.shippedItems.push(newShippedItem); 
  }

  Remove(removedShippedItem: ShippedItem): void {
    const index = this.shippedItems.indexOf(removedShippedItem, 0);
    if (index > -1) {
      this.shippedItems.splice(index, 1);
    }
  }
}

interface IBusinessCompany {
  NewFlight(flightNum: number): void;
  AddToFlight(flightNum: number, shippedItem: ShippedItem): void;
}

interface IPleasureCompany extends Omit<IBusinessCompany, 'AddToFlight'> {
  RemoveFromFlight(flightNum: number, passenger: Passenger): void;
  AddToFlight(flightNum: number, passenger: Passenger): void;
}

abstract class Company<T> {
  constructor (public nome:string, public flights:Flight<T>[]) { }
}

abstract class BusinessCompany extends Company<ShippedItem> implements IBusinessCompany {
  abstract NewFlight(flightNum: number): void;
  abstract AddToFlight(flightNum: number, shippedItem: ShippedItem): void;
}

abstract class PleasureCompany extends Company<Passenger> implements IPleasureCompany {
  abstract NewFlight(flightNum: number): void;
  abstract AddToFlight(flightNum: number, passenger: Passenger): void;
  abstract RemoveFromFlight(flightNum: number, passenger: Passenger): void;
}

class TravelingCompany extends PleasureCompany {
  NewFlight(flightNum: number): void{
    const newFlight: Flight<Passenger> = new PleasureFlight(flightNum, []);
    this.flights.push(newFlight);
  }
  AddToFlight(flightNum: number, passenger: Passenger): void {
    const currentFlight = this.flights.find((f) => f.num == flightNum);
    if (currentFlight) {
      currentFlight.Add(passenger);
    }
  }
  RemoveFromFlight(flightNum: number, passenger: Passenger): void {
    const currentFlight = this.flights.find((f) => f.num == flightNum);
    if (currentFlight) {
      currentFlight.Remove(passenger);
    }
  }
}

class ShippingCompany extends BusinessCompany {
  NewFlight(flightNum: number): void{
    const newFlight = new BusinessFlight(flightNum, []);
    this.flights.push(newFlight);
  }

  AddToFlight(flightNum:number, item:ShippedItem): void {
    const currentFlight = this.flights.find((f) => f.num == flightNum);
    if (currentFlight) {
      currentFlight.Add(item);
    }
  }
}