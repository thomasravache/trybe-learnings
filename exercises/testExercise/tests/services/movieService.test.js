const sinon = require('sinon');
const { expect } = require('chai');

const MovieService = require('../../services/movieService');
const MoviesModel = require('../../models/movieModel');

describe('----- TESTES DA CAMADA DE SERVICE -----\n', () => {
  describe('Insere um novo filme no BD', () => {
    describe('quando o payload informado não é válido', () => {
      const payload = {};
  
      it('Retorna um boolean', async () => {
        const response = await MovieService.create(payload);
  
        expect(response).to.be.a('boolean');
      });
  
      it('o boolean contém false', async () => {
        const response = await MovieService.create(payload);
  
        expect(response).to.be.equal(false);
      });
    });
  
    describe('quando é inserido com sucesso', () => {
      const payloadMovie = {
        title: 'Example Movie',
        directedBy: 'Jane Dow',
        releaseYear: 1999,
      };
  
      before(async () => {
        const ID_EXAMPLE = 1;
  
        sinon.stub(MoviesModel, 'create').resolves({
          id: ID_EXAMPLE,
        })
      });
  
      after(async () => {
        MoviesModel.create.restore();
      });
  
      it('É um objeto', async () => {
        const response = await MovieService.create(payloadMovie);
  
        expect(response).to.be.a('object');
      });
  
      it('tal objeto possui o "id" do novo filme inserido', async () => {
        const response = await MovieService.create(payloadMovie);
  
        expect(response).to.have.a.property('id');
      });
    })
  });

  describe('(getById) Procura um filme no BD', () => {

    describe('quando o filme é encontrado', async () => {
      before(async () => {
        const payload = {
          title: 'Teste',
          directedBy: 'Teste',
          releaseYear: 1970,
        }

        sinon.stub(MoviesModel, 'getById').resolves()
      })
    });

  });
});
