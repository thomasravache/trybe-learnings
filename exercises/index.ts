import express from 'express';
import { PlantRoutes } from './routes/plantRoutes';
import plantController from './controllers/PlantController';
import bodyParser from 'body-parser';

const app: express.Application = express();

const PORT = 3000;

const plantRoutes = new PlantRoutes(app, plantController);

app.use(bodyParser.json());

plantRoutes.use();

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
