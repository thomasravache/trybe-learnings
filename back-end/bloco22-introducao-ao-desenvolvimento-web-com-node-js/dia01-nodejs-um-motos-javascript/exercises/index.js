const { questionInt } = require('readline-sync');
const imcCalculator = require('./imc');
const velocidadeMedia = require('./velocidade');
const sorteio = require('./sorteio');
const calculoDeFatorial = require('./fatorial');
const fibonacci = require('./fibonacci');

const main = () => {
  const scripts = [
    {nome: 'Calcular IMC', function: imcCalculator},
    {nome: 'Calcular velocidade média', function: velocidadeMedia},
    {nome: 'Jogo de adivinhação', function: sorteio},
    {nome: 'Calcular Fatorial', function: calculoDeFatorial},
    {nome: 'Sequência de Fibonacci', function: fibonacci},
  ];

  const indiceMenu = scripts
    .map(({nome}, index) => `${index + 1} - ${nome}`)
    .join('\n');

  const number = questionInt(`Informe um número\n\n${indiceMenu}\n\nResposta: `);
  const selectedIndex = scripts.findIndex((_, index) => index === (number - 1));

  if (!scripts[selectedIndex]) return console.log('Número inválido. Saindo...');

  scripts[selectedIndex].function();
};

main();
