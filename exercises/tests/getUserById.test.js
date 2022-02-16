const chai = require('chai');
const sinon = require('sinon');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const server = require('../src/api/app');
const { User } = require('../src/models');


// const { User: mockUser } = require('./mock/models');
const fakeUsers = require('./mock/models/Users.json');
const { expect } = require('chai');

describe('Rota /api/users/:userId', () => {
  describe('Quando um usuário é buscado com sucesso', () => {
    let response;

    before(async () => {
      sinon.stub(User, 'findOne').resolves(fakeUsers[0]);

      const loginResponse = await chai
        .request(server)
        .post('/api/login')
        .send({ username: fakeUsers[0].username, password: fakeUsers[0].password });

      response = await chai
        .request(server)
        .get('/api/users/1')
        .set('authorization', loginResponse.body.token);
    });

    after(async () => {
      User.findOne.restore();
    });

    it('deve retornar status 200', () => {
      expect(response).to.have.status(200);
    });

    it('deve conter um objeto no body', () => {
      expect(response.body).to.be.an('object');
    });

    it('deve ter as propriedades "id", "username", "password"', () => {
      expect(response.body).to.have.all.keys('id', 'username', 'password');
    });
  });

  describe('Quando o token não é passado', () => {
    let response;

    before(async () => {
      // sinon.stub(User, 'findOne').resolves(null);

      response = await chai
        .request(server)
        .get('/api/users/1');
    });

    after(async () => {
      // User.findOne.restore();
    });

    it('deve retornar status "400"', () => {
      expect(response).to.have.status(400);
    });

    it('deve retornar o objeto com erro "Token não encontrado ou informado"', () => {
      expect(response.body).to.have.keys('error');
      expect(response.body.error).to.be.equals('Token não encontrado ou informado');
    });
  });
});