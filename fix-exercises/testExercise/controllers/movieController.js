const express = require('express');
const movieRouter = express.Router();

const MoviesService = require('../services/movieService');

movieRouter.post('/', async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MoviesService.create({ title, directedBy, releaseYear });

  if (!movie) return res.status(400).send('Dados inválidos');

  return res.status(201).send('Filme criado com sucesso!');
});

movieRouter.get('/:teste', (req, res) => {
  const { teste } = req.params;
  res.status(200).send(teste);
})

module.exports = movieRouter;
