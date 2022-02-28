import * as Exercise from './exercises';
import { greeter } from './exercises';

console.log(greeter('thomas'));
console.log(Exercise.greeter('Thomas'));
console.log(Exercise.personAge('Thomas', 23));
console.log(`A soma do array é igual a ${Exercise.sumArray([2, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);

console.log(`Quadrado de lado 10cm ${Exercise.square(10)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);

console.log(`Losango de diagonal maior 32cm e diagonal menor 18cm: ${Exercise.diamond(32, 18)}cm²`);

console.log(`Trapézio com altura de 50cm, base maior de 100cm e base menor de 70cm: ${Exercise.trapeze(50, 100, 70)}cm²`);

console.log(`Círculo com raio igual a 25cm: ${Exercise.circle(25)}cm²`);
