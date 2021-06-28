const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEvenNumbers = (evenNumber) => evenNumber % 2 === 0;
// Filtra o array pegando armazenando em um novo array apenas os pares e depois soma todos esses valores com o reduce
const sumEvenNumbers = numbers.filter(getEvenNumbers).reduce((accumulator, value) => accumulator += value);

console.log(sumEvenNumbers);
