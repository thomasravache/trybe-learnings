const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const pingRouter = require('./controllers/PingController');
const cepRouter = require('./controllers/CepController');
const ErrorController = require('./controllers/ErrorController');

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());

app.use('/ping', pingRouter);
app.use('/cep', cepRouter);
app.use(ErrorController);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
