const { questionInt } = require('readline-sync');

const fizzBuzzFunction = () => {
  const number = questionInt('Informe um número maior que zero\nInput: ');

  return new Promise((resolve, reject) => {
    if(number % 3 === 0 && number % 5 === 0) resolve('FizzBuzz');
    if(number % 3 === 0) resolve('Fizz');
    if(number % 5 === 0) resolve('Buzz');
    reject(number);
  })
};

fizzBuzzFunction()
  .then(resposta => console.log(resposta))
  .catch(erro => console.log(erro));
