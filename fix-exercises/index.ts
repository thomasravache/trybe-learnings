import * as Exercise from './exercises';

console.log(Exercise.greeter('Thomas'));
console.log(Exercise.personAge('Thomas', 23));
console.log(`A soma do array é igual a ${Exercise.sumArray([2, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);

console.log(`Quadrado de lado 10cm ${Exercise.square(10)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
