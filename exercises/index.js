const express = require('express');
const bodyParser = require('body-parser');
const userRouter = require('./middlewares/userMiddleware');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());

app.use('/user', userRouter);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
