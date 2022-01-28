const sinon = require('sinon');
const { expect } = require('chai');

const MoviesModel = require('../../models/movieModel');
const connection = require('../../models/connection');

describe('----- TESTES DA CAMADA DE MODEL -----\n', () => {
  describe('Insere um novo filme no BD', () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };
  
    before(async () => {
      const execute = [{ insertId: 1 }];
  
      sinon.stub(connection, 'execute').resolves(execute);
    });
  
    after(async () => {
      connection.execute.restore();
    });
  
    describe('quando é inserido com sucesso', () => {
  
      it('retorna um objeto', async () => {
        const response = await MoviesModel.create(payloadMovie);
  
        expect(response).to.be.a('object');
      });
  
      it('tal objeto possui o "id" do novo filme inserido', async () => {
        const response = await MoviesModel.create(payloadMovie);
  
        expect(response).to.have.a.property('id');
      });
  
    });
  })
});
