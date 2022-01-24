const express = require('express');
const bodyParser = require('body-parser');
const booksRouter = require('./controllers/BookController');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use('/books', booksRouter);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
