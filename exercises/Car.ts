import { IVehicle } from './interfaces';

export class Car implements IVehicle {
  drive(): void {
    console.log('Drive a car');
  }
}