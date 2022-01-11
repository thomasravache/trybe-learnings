const { questionInt } = require('readline-sync');

const gerarNumeroInteiroAleatorio = (minimo, maximo) => {
  const numeroMinimo = Math.ceil(minimo);
  const numeroMaximo = Math.floor(maximo);
  return Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;
}
const numeroDoSorteio = gerarNumeroInteiroAleatorio(1, 10);
const question = questionInt('Informe um número\n');

const resposta = question === numeroDoSorteio
  ? 'Parabéns, número correto!'
  : `Opa, não foi dessa vez. O número correto era ${numeroDoSorteio}.`;

console.log(resposta);

module.exports = gerarNumeroInteiroAleatorio;
