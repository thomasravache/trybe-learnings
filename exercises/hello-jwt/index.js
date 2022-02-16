// require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const controllers = require('./controllers');
const middlewares = require('./middlewares');

const app = express();

const { PORT } = process.env;
app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
  );
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  app.post('/login', controllers.login);
  app.use(middlewares.auth);
  app.get('/ping', controllers.ping);
  app.get('/users/me', controllers.usersme);
  app.get('/top-secret', controllers.topSecret);
  
  app.use(middlewares.error);
  
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
