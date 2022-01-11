const { questionInt } = require('readline-sync');

const fibonacciNumbers = () => {
  const numeroInformado = questionInt('Informe um número maior que 0\n');
  let a = 1;
  let b = 1;
  let temp = null;
  let string = '';
  for(let i = 1; i <= numeroInformado; i+= 1) {
    if(i === 1) string += `1 `;
    if(i === 2) string += '1 ';
    if(i >= 3) {
      string += `${a + b} `;
      temp = a;
      a = b;
      b += temp;
    }
  }
  return console.log(string);
};

module.exports = fibonacciNumbers;
