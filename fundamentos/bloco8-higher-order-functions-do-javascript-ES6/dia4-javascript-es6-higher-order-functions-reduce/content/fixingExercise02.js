const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const getEvenNumbers = (evenNumber) => evenNumber % 2 === 0;
const sumEven = (accumulator, value) => accumulator + value;
// Filtra o array pegando armazenando em um novo array apenas os pares e depois soma todos esses valores com o reduce

const sumEvenNumbers = (array) => array.filter(getEvenNumbers).reduce(sumEven);

console.log(sumEvenNumbers(numbers));
