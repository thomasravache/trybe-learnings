require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { BookRouter } = require('./controllers/BookController');
const ErrorController = require('./controllers/ErrorController');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use('/books', BookRouter);
app.use(ErrorController);

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});

