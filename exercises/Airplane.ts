import { IAirplane } from './interfaces';

export class Airplane implements IAirplane {
  fly(): void {
    console.log('voando');
  }
}