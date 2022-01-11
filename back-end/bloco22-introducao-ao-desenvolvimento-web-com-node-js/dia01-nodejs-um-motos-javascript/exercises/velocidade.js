const { questionInt } = require('readline-sync');

const calculaVelocidadeMedia = () => {
  const distancia = questionInt('Informe a distância (em metros)\n');
  const tempo = questionInt('Informe o tempo (em segundos)\n');
  const velocidadeMedia = (distancia / tempo).toFixed(2);

  return console.log(`A velocidade média é de ${velocidadeMedia}m/s`);
};

module.exports = calculaVelocidadeMedia;
