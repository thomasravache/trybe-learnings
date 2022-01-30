const express = require('express');
const movieRouter = express.Router();

const MoviesService = require('../services/movieService');

const errorHandler = (error, res) => {
  const statusCodes = {
    notFound: 404,
  };

  const statusCode = statusCodes[error.code];

  if (!statusCode) {
    console.error(error);
    return res.status(500).json({ message: 'Erro inesperado!' });
  };

  return res.status(statusCode).json({ message: error.message });
};

movieRouter.post('/', async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MoviesService.create({ title, directedBy, releaseYear });

  if (!movie) return res.status(400).send('Dados inválidos');

  return res.status(201).send('Filme criado com sucesso!');
});

movieRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
  
    const result = await MoviesService.getById(id);
  
    return res.status(200).json(result);
  } catch (e) {
    errorHandler(e, res);
  }
});

module.exports = movieRouter;
