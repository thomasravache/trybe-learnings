// require('dotenv').config();
const express = require('express');
const bodyParser = require("body-parser");

const userController = require('./controllers/UserController');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use('/user', userController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
