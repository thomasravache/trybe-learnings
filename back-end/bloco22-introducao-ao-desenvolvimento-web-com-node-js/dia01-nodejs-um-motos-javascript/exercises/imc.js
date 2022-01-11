const { questionFloat } = require('readline-sync');

const imcCalculator = (height, weight) => {
  const value = (weight / Math.pow(height, 2)).toFixed(2);
  let status = null;

  if(value < 18.5) {
    status = 'Abaixo do peso (magreza)';
  } else if(value >= 18.5 && value < 25) {
    status = 'Peso normal';
  } else if(value >= 25 && value < 30) {
    status = 'Acima do peso (sobrepreso)';
  } else if(value >=30 && value < 35) {
    status = 'Obesidade grau I';
  } else if(value >= 35 && value < 40) {
    status = 'Obesidade grau II';
  } else if(value >= 40) {
    status = 'Obesidade graus III e IV';
  }

  return { value, status };
};

const weight = questionFloat('Informe seu peso\n');
const height = questionFloat('Informe a sua altura\n');
const { value, status } = imcCalculator(height, weight);

console.log(`seu IMC é de ${value}. Status: ${status}.`);

module.exports = imcCalculator;
