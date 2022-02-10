const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const { expect } = chai;

// const {BookRouter} = require('../controllers/BookController');
const app = require('../index');
const BookService = require('../services/BookService');

describe('---- TESTES DO CONTROLLER ----', () => {
  describe('--- (findAll) ---', () => {
    describe('quando não existe um livro cadastrado', () => {
      before(() => {
        sinon.stub(BookService, 'findAll').resolves([]);
      });

      after(() => {
        BookService.findAll.restore();
      });

      it('o status é 200', async () => {
        const result = await chai.request(app).get('/books');

        expect(result.status).to.be.equals(200);
      });

      it('O resultado é um array vazio', async () => {
        const result = await chai.request(app).get('/books');

        expect(result.body).to.be.an('array');
        expect(result.body).to.be.empty;
      });
    });

    describe('quando existe um livro cadastrado', () => {
      const serviceReturn = [
        {
          id: 1,
          title: 'Livro 1',
          author: 'Menino da porteira',
          pageQuantity: 2,
          createdAt: '2022-02-09T22:24:03.000Z',
          updatedAt: '2022-02-09T22:24:03.000Z'
        }
      ];

      before(() => {
        sinon.stub(BookService, 'findById').resolves(serviceReturn)
      });

      after(() => {
        BookService.findById.restore();
      });

      it('o status deve ser 200', async () => {
        const result = await chai.request(app).get('/books');

        expect(result.status).to.be.equals(200);
      });

      it('o retorno deve ser um array de objetos com os livros', async () => {
        const result = await chai.request(app).get('/books');

        expect(result.body).to.be.an('array');
        
        result.body.forEach((book) => {
          expect(book).to.have.keys('id', 'title', 'author', 'pageQuantity', 'createdAt', 'updatedAt');
        });
      });
    });
  });
})