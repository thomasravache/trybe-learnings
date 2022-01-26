const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const pingRouter = require('./controllers/ping');

const PORT = process.env.PORT;

const app = express();

app.use(bodyParser.json());

app.use('/ping', pingRouter);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
