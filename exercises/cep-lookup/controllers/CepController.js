const express = require('express');
const cepRouter = express.Router();
const rescue = require('express-rescue');
const CepService = require('../services/CepService');

cepRouter.get('/:cep', rescue(async (req, res) => {
  const { cep } = req.params;

  const isValidCep = /\d{5}-?\d{3}/i;

  if (!isValidCep.test(cep)) throw {
    code: 'invalidData',
    message: 'CEP inválido',
  };

  const searchedCep = await CepService.getByCepName(cep);

  return res.status(200).json(searchedCep);
}));

module.exports = cepRouter;
