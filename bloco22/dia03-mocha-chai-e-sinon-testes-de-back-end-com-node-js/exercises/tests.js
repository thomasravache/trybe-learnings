const { expect } = require('chai');
const numberStatus = require('./numberStatus');
const fs = require('fs');
const sinon = require('sinon');
const myWriteFileFunction = require('./writeFile');

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

  describe('Caso a função consiga escrever no arquivo', () => {
    before(() => {
      sinon.stub(fs.promises, 'writeFile').resolves(FILE_CONTENT);
    })

    it('Verifica se o parâmetro é uma string', async () => {
      const result = await myWriteFileFunction(FILE_NAME, 1);

      expect(result).to.be.equal('não é uma string');
    });
    it('Verifica se após a escrita retorna um "ok"', async () => {
      const result = await myWriteFileFunction(FILE_NAME, FILE_CONTENT);

      expect(result).to.be.equal('ok');
    })

    after(() => {
      fs.promises.writeFile.restore();
    })
  });

  describe('Caso a função não consiga escrever no arquivo', () => {
    before(() => {
      sinon.stub(fs.promises, 'writeFile').rejects();
    });

    it('Verifica se retorna a string "Deu ruim"', async () => {
      const result = await myWriteFileFunction(FILE_NAME, FILE_CONTENT);

      expect(result).to.be.equal('Deu ruim');
    });

    after(() => {
      fs.promises.writeFile.restore();
    });
  });
});
