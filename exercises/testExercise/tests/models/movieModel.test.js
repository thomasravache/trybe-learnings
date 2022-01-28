const sinon = require('sinon');
const { expect } = require('chai');

const MoviesModel = require('../../models/movieModel');
const connection = require('../../models/connection');

describe('----- TESTES DA CAMADA DE MODEL -----\n', () => {
  describe('(create) Insere um novo filme no BD', () => {
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
  });

  describe('(getById) Procura um filme no BD', () => {
    describe('quando o filme não é encontrado', () => {
      const ID_EXAMPLE = 1;
  
      before(async () => {
        sinon.stub(connection, 'execute').resolves([[]])
      })
  
      after(async () => {
        connection.execute.restore();
      })
  
      it('quando o filme não é encontrado', async () => {
        const response = await MoviesModel.getById(ID_EXAMPLE);

        expect(response).to.be.an('array');
        expect(response.length).to.be.equal(0);
      });
    });

    describe('quando o filme é encontrado', () => {
      const ID_EXAMPLE = 1;

      before(async () => {
        const payload = {
          title: 'Teste',
          directedBy: 'Teste',
          releaseYear: 1970,
        };

        sinon.stub(connection, 'execute').resolves([[payload]]);
      });

      after(async () => {
        connection.execute.restore();
      });

      it('deve retornar um array', async () => {
        const response = await MoviesModel.getById(ID_EXAMPLE);
  
        expect(response).to.be.an('array');
      });

      it('deve conter apenas um objeto', async () => {
        const response = await MoviesModel.getById(ID_EXAMPLE);

        expect(response.length).to.be.equal(1);
      });

      it('deve conter as chaves "title", "directedBy", "releaseYear"', async () => {
        const [response] = await MoviesModel.getById(ID_EXAMPLE);

        expect(response).to.have.keys('title', 'directedBy', 'releaseYear');
      });
    });
  });
});
