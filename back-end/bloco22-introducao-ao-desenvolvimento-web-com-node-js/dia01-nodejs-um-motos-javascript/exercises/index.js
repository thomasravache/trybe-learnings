const imc = require('./imc');
const { questionFloat } = require('readline-sync');

function main() {
  const weight = questionFloat('Informe seu peso\n');
  const height = questionFloat('Informe a sua altura\n');
  console.log(`seu imc é de ${imc(height, weight)}`);
}

main();
