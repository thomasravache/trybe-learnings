const { question, questionInt } = require('readline-sync');

const name = question('Qual seu nome? ');
const age = questionInt('Qual a sua idade? ');

console.log(`Olá, ${name}! você tem ${age} anos de idade!`);

console.log('Hello, World!');
