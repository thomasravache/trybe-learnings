const { expect } = require('chai');
const numberStatus = require('./numberStatus');

describe('Exercício 1', () => {
  it('Verifica se o parâmetro é um número', () => {
    const parameter = 'teste'
    const result = numberStatus(parameter);

    expect(result).to.be.equal('o valor deve ser um número');
  })

  it('Verifica se o número é positivo.', () => {
    const result = numberStatus(3);

    expect(result).to.be.equal('positivo');
  });

  it('Verifica se o número é negativo.', () => {
    const result = numberStatus(-1);

    expect(result).to.be.equal('negativo');
  });

  it('Verifica se o número é neutro.', () => {
    const result = numberStatus(0);

    expect(result).to.be.equal('neutro');
  });
});
