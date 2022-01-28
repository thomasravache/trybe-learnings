const express = require('express');
const bodyParser = require('body-parser');
const movieRouter = require('./controllers/movieController');

const app = express();

app.use(bodyParser.json());
app.use('/movies', movieRouter);
console.log(movieRouter.stack[0].route.stack[0].handle);

app.listen(3000, () => {
  console.log('Ouvindo na porta 3000');
});
