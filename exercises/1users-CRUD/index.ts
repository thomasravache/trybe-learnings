import express, { Application } from 'express';
import bodyParser from 'body-parser';

const app: Application = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
