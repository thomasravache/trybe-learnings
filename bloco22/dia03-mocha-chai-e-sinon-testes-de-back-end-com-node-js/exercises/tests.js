const { expect } = require('chai');
const numberStatus = require('./numberStatus');
const fs = require('fs');
const sinon = require('sinon');
const myReadFileFunction = require('./readFile');

describe('Exercício de Status de um número', () => {
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

describe('Testando a chamada da função "readFile"', () => {
  const FILE_NAME = 'arquivo.txt';
  const FILE_CONTENT = 'Um texto qualquer';

  describe('Caso a função consiga ler o arquivo', () => {
    before(() => {
      sinon.stub(fs.promises, 'readFile').resolves(FILE_CONTENT);
    })

    it('Verifica se retorna uma string', async () => {
      const result = await myReadFileFunction(FILE_NAME, FILE_CONTENT);

      expect(result).to.be.a('string');
    });
    it('Verifica se após a leitura retorna um "ok"', () => {
      const result = await myReadFileFunction(FILE_NAME, FILE_CONTENT);

      expect(result).to.be.equal('ok');
    })

    after(() => {
      fs.promises.readFile.restore();
    })
  });

  describe('Caso a função não consiga ler o arquivo', () => {
    before(() => {
      sinon.stub(fs.promises, 'readFile').rejects();
    });

    it('Verifica se retorna a string "Deu ruim"', async () => {
      const result = await myReadFileFunction(FILE_NAME, FILE_CONTENT);

      expect(result).to.be.equal('Deu ruim');
    });

    after(() => {
      fs.promises.readFile.restore();
    })
  });
});
