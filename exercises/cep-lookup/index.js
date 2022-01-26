import { config } from 'dotenv';
config();
// const express = require('express');
import express from 'express';
// const bodyParser = require('body-parser');
import bodyParser from 'body-parser';
// require('dotenv').config();

// const pingRouter = require('./controllers/PingController');
import pingRouter from './controllers/PingController.js';
// const cepRouter = require('./controllers/CepController');
import cepRouter from './controllers/CepController.js';
// const ErrorController = require('./controllers/ErrorController');
import ErrorController from './controllers/ErrorController.js';

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());

app.use('/ping', pingRouter);
app.use('/cep', cepRouter);
app.use(ErrorController);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
