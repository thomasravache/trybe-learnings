import express, { Application } from 'express';
import blogPostRoutes from './controller/BlogPostController';
import { domainError, inputError, serverError } from './errorMiddlewares'
import bodyParser from 'body-parser';

const app: Application = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/post', blogPostRoutes);

/* Error Handlers */
app.use(inputError);
app.use(domainError);
app.use(serverError);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}`);
});
