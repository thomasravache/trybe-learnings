import express, { Application } from 'express';
import restaurantRoutes from './controller/RestaurantController';
import { domainError, inputError, serverError } from './errorMiddlewares'
import bodyParser from 'body-parser';

const app: Application = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/restaurant', restaurantRoutes);

/* Error Handlers */
app.use(inputError);
app.use(domainError);
app.use(serverError);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
