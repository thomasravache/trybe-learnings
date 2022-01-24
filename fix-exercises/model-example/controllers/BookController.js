const express = require('express');
const Joi = require('joi');
const rescue = require('express-rescue');

const router = express.Router();
const Books = require('../services/BookService');

router.get('/', async (_req, res) => {
  const books = await Books.getAll();

  res.status(200).json(books);
});

router.get('/search', rescue(async (req, res) => {
  const { authorId } = req.query;
  const books = await Books.getAuthorById(authorId);

  if(!books) return res.status(404).json({ message: 'Not found.' })

  return res.status(200).json(books);
}));

router.get('/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const book = await Books.getById(id);

  if (!book) return res.status(404).json({ message: 'Not found' });

  return res.status(200).json(book);
}));

router.post('/', rescue(async (req, res, next) => {
  const { title, authorId } = req.body;

  const { error } = Joi.object({
    title: Joi.string().not().empty().required().min(3),
  })

  if (error) return next(error);

  await Books.create(title, authorId);

  return res.status(201).json({ message: 'Livro criado com sucesso!' })
}));

module.exports = router;
