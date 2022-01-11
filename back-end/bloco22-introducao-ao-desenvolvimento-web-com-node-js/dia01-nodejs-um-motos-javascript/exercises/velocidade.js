const { questionInt } = require('readline-sync');

const calculaVelocidadeMedia = (distancia, tempo) => distancia / tempo;

const distancia = questionInt('Informe a distância (em metros)\n');
const tempo = questionInt('Informe o tempo (em segundos)\n');
const resultado = calculaVelocidadeMedia(distancia, tempo).toFixed(2);

console.log(`A velocidade média é de ${resultado}m/s`);

module.exports = calculaVelocidadeMedia;
