const { questionInt } = require('readline-sync');

const calculaFatorial = () => {
  const numeroInformado = questionInt('Informe um número para o cálculo\n');
  let armazenadorDeResultado = numeroInformado;
  if(numeroInformado === 0) armazenadorDeResultado = 1;
  
  for(let i = numeroInformado-1; i >= 1; i-= 1) {
    armazenadorDeResultado = armazenadorDeResultado * i;
  }

  return console.log(`Resultado: ${armazenadorDeResultado}`);
};

module.exports = calculaFatorial;
