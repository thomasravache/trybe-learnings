const sinon = require('sinon');
const { expect } = require('chai');
const MoviesRouter = require('../../controllers/movieController');
const MoviesService = require('../../services/movieService');

const MoviesController = {
  create: MoviesRouter.stack[0].route.stack[0].handle,
  getById: MoviesRouter.stack[1].route.stack[0].handle,
}

// const ErrorController = {
//   treatError = require('../../controllers/ErrorController'),
// }

describe('----- TESTES DA CAMADA DE CONTROLLER -----\n', () => {
  describe('--- (create) --- Ao chamar o controller de create', () => {
    describe('quando o payload informado não é válido', () => {
      const req = {};
      const res = {};

      before(() => {
        req.body = {};

        res.status = sinon.stub().returns(res);
        res.send = sinon.stub().returns();

        sinon.stub(MoviesService, 'create').resolves(false);
      });

      after(() => {
        MoviesService.create.restore();
      })

      it('é chamado o status com o código 400', async () => {
        await MoviesController.create(req, res);

        expect(res.status.calledWith(400)).to.be.equal(true);
      });

      it('é chamado o send com a mensagem "Dados inválidos"', async () => {
        await MoviesController.create(req, res);

        expect(res.send.calledWith('Dados inválidos')).to.be.equal(true);
      });
    });

    describe('quando é inserido com sucesso', () => {
      const req = {};
      const res = {};

      before(() => {
        req.body = {
          title: 'Example Movie',
          directedBy: 'Jane Dow',
          releaseYear: 1999,
        };

        res.status = sinon.stub().returns(res);
        res.send = sinon.stub().returns();

        sinon.stub(MoviesService, 'create').resolves(true);
      });

      after(() => {
        MoviesService.create.restore();
      })

      it('é chamado o status com o código 201', async () => {
        await MoviesController.create(req, res);

        expect(res.status.calledWith(201)).to.be.true;
      });

      it('é chamado o send com a mensagem "Filme criado com sucesso!"', async () => {
        await MoviesController.create(req, res);

        expect(res.send.calledWith('Filme criado com sucesso!')).to.be.equal(true);
      });
    });
  });

  describe('--- (getById) --- Ao chamar o controller getById', () => {
    describe('quando o payload não é válido', () => {
      const req = {};
      const res = {};

      before(() => {
        req.params = {};

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        sinon.stub(MoviesService, 'getById').rejects({ code: 'notFound', message: 'Filme não encontrado' });
      });

      after(() => {
        MoviesService.getById.restore();
      });

      it('Devolve status "404" para o cliente', async () => {
        await MoviesController.getById(req, res);

        expect(res.status.calledWith(404)).to.be.true;
      });

      it('Devolve json com message: "Filme não encontrado"', async () => {
        await MoviesController.getById(req, res);

        expect(res.json.calledWith({ message: 'Filme não encontrado' })).to.be.true;
      });
    });

    describe('quando o payload é válido', () => {
      const ID_EXAMPLE = 1;
      const req = {};
      const res = {};

      before(() => {
        req.params = {
          id: ID_EXAMPLE,
        };

        res.status = sinon.stub().returns(res);
        res.json = sinon.stub().returns();

        sinon.stub(MoviesService, 'getById').resolves([
          {
            title: 'Teste',
            directedBy: 'Teste',
            releaseYear: 1970,
          },
        ]);
      });

      after(() => {
        MoviesService.getById.restore();
      });

      it('Devolve o status "200"', async () => {
        await MoviesController.getById(req, res);

        expect(res.status.calledWith(200)).to.be.true;
      });

      it('Devolve o json com a informação do movie', async () => {
        await MoviesController.getById(req, res);

        const jsonReturn = [
          {
            title: 'Teste',
            directedBy: 'Teste',
            releaseYear: 1970,
          },
        ];

        expect(res.json.calledWith(jsonReturn)).to.be.true;
      });
    });
  })
});