let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const array = [comida, animal, bebida];

const [animalzin, bebidinha, comidinha] = array;

console.log(animalzin);
console.log(bebidinha);
console.log(comidinha);