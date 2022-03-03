import { Car } from './car';

interface AirCraft extends Car {
  model: string;
  releaseYear: number;
  automaker: string;
}

let airplane: AirCraft = {
  model: 'F35',
  releaseYear: 2021,
  automaker: 'Embraer',
}