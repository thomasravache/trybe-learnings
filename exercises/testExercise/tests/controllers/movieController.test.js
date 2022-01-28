const sinon = require('sinon');
const { expect } = require('chai');
const MoviesRouter = require('../../controllers/movieController');
const MoviesService = require('../../services/movieService');

const MoviesController = {
  create: MoviesRouter.stack[0].route.stack[0].handle,
}

describe('----- TESTES DA CAMADA DE CONTROLLER -----\n', () => {
  describe('Ao chamar o controller de create', () => {
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

      it('é chamado o sendo com a mensagem "Dados inválidos"', async () => {
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
})