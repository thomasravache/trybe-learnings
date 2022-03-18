import express from 'express';
import plantRouter from './routes/plantRoutes';
import bodyParser from 'body-parser';

const app: express.Application = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(plantRouter);

app.listen(PORT, () => {
  console.log(`Escutando na porta ${PORT}`);
});
