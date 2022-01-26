// const express = require('express');
import express from 'express';
const cepRouter = express.Router();
// const rescue = require('express-rescue');
import rescue from 'express-rescue';
// const Joi = require('joi');
import Joi from 'joi';
// const CepService = require('../services/CepService');
import CepService from '../services/CepService.js';

cepRouter.get('/:cep', rescue(async (req, res) => {
  const { cep } = req.params;

  const searchedCep = await CepService.getByCepNumber(cep);

  return res.status(200).json(searchedCep);
}));

cepRouter.post('/', rescue(async (req, res, next) => {
  const { cep, logradouro, bairro, localidade, uf } = req.body;

  const { error } = Joi.object({
    cep: Joi.string().not().empty().required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required(),
  }).validate({ cep, logradouro, bairro, localidade, uf });

  if (error) return next(error);

  await CepService.create(cep, logradouro, bairro, localidade, uf);

  const result = {
    cep,
    logradouro,
    bairro,
    localidade,
    uf,
  };

  res.status(201).json(result);
}));

// module.exports = cepRouter;
export default cepRouter;
