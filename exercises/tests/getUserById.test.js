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
  describe('Quando o token é passado', () => {
    let loginResponse;

    before(async () => {
      sinon.stub(User, 'findOne').resolves(fakeUsers[0]);

      loginResponse = await chai
        .request(server)
        .post('/api/login')
        .send({ username: fakeUsers[0].username, password: fakeUsers[0].password });
    });

    after(async () => {
      User.findOne.restore();
    });

    describe('Quando um usuário é buscado com sucesso', () => {
      let response;

      before(async () => {
        response = await chai
        .request(server)
        .get(`/api/users/${fakeUsers[0].id}`)
        .set('authorization', loginResponse.body.token);
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

    describe('Quando o usuário tenta acessar dados de outro usuario', () => {
      let response;

      before(async () => {
        response = await chai
        .request(server)
        .get(`/api/users/${fakeUsers[1].id}`)
        .set('authorization', loginResponse.body.token);
      });

      it('deve retornar status "401"', () => {
        expect(response).to.have.status(401);
      });

      it('body deve ter o texto "Acesso negado"', () => {
        expect(response.body.message).to.be.equals('Acesso negado');
      });
    });
  });

  describe('Quando o token não é passado', () => {
    let response;

    before(async () => {
      response = await chai
        .request(server)
        .get('/api/users/1');
    });

    it('deve retornar status "400"', () => {
      expect(response).to.have.status(400);
    });

    it('deve retornar o objeto com erro "Token não encontrado ou informado"', () => {
      expect(response.body).to.have.keys('error');
      expect(response.body.error).to.be.equals('Token não encontrado ou informado');
    });
  });

  describe('O usuário pode ver somente seus dados', () => {
  })
});