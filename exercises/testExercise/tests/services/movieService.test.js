const sinon = require('sinon');
const { expect } = require('chai');

const MoviesService = require('../../services/movieService');
const MoviesModel = require('../../models/movieModel');

describe('----- TESTES DA CAMADA DE SERVICE -----\n', () => {
  describe('--- (create) --- Insere um novo filme no BD', () => {
    describe('quando o payload informado não é válido', () => {
      const payload = {};
  
      it('Retorna um boolean', async () => {
        const response = await MoviesService.create(payload);
  
        expect(response).to.be.a('boolean');
      });
  
      it('o boolean contém false', async () => {
        const response = await MoviesService.create(payload);
  
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
        const response = await MoviesService.create(payloadMovie);
  
        expect(response).to.be.a('object');
      });
  
      it('tal objeto possui o "id" do novo filme inserido', async () => {
        const response = await MoviesService.create(payloadMovie);
  
        expect(response).to.have.a.property('id');
      });
    })
  });

  describe('--- (getById) --- Procura um filme no BD', () => {

    describe('quando o filme é encontrado', async () => {
      const ID_EXAMPLE = 1;

      before(async () => {
        const payload = {
          title: 'Teste',
          directedBy: 'Teste',
          releaseYear: 1970,
        };

        sinon.stub(MoviesModel, 'getById').resolves([payload]);
      })

      after(async () => {
        MoviesModel.getById.restore();
      });

      it('deve retornar um array', async () => {
        const response = await MoviesService.getById(ID_EXAMPLE);

        expect(response).to.be.an('array');
      });

      it('deve conter apenas um objeto', async () => {
        const response = await MoviesService.getById(ID_EXAMPLE);

        expect(response.length).to.be.equal(1);
        expect(response[0]).to.be.a('object');
      });

      it('deve conter as chaves "title", "directedBy", "releaseYear"', async () => {
        const [response] = await MoviesService.getById(ID_EXAMPLE);

        expect(response).to.have.keys('title', 'directedBy', 'releaseYear');
      });
    });

    describe('quando o filme não é encontrado', () => {
      describe('deve ser lançado um erro', () => {
        const ID_EXAMPLE = 1;

        before(async () => {
          sinon.stub(MoviesModel, 'getById').resolves([]);
        });
  
        after(async () => {
          MoviesModel.getById.restore();
        });


        it('o erro deve ser um objeto com code: "notFound", message: "Filme não encontrado"', async () => {
          try {
            await MoviesService.getById(ID_EXAMPLE);
          } catch (e) {
            expect(e).to.be.a('object');
            expect(e).to.deep.equal({ code: 'notFound', message: 'Filme não encontrado' });
          }
        });
      })
    });

  });
});
