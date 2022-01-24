const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./controllers/BookController');
const errorController = require('./controllers/ErrorController');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use('/books', booksRouter);
app.use(errorController);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
