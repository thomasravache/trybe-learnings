import express from 'express';
import plantRouter from './controllers/PlantController';
import bodyParser from 'body-parser';

const app: express.Application = express();

const PORT = 3000;


app.use(bodyParser.json());

app.use(plantRouter);

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
