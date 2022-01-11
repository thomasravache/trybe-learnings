const { questionInt } = require('readline-sync');
const imcCalculator = require('./imc');
const velocidadeMedia = require('./velocidade');
const sorteio = require('./sorteio');

const main = () => {
  const number = questionInt('Informe um número\n\n1 - Calcular IMC\n2 - Calcular velocidade média\n3 - Jogo de adivinhação\n\nResposta: ');

  switch(number) {
    case 1:
      imcCalculator();
      return;
    case 2:
      velocidadeMedia();
      return;
    case 3:
      sorteio();
      return;
    default:
      console.log('Número inválido. Saindo...');
  }
};

main();
