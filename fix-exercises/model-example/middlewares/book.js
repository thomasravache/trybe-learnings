const express = require('express');
const router = express.Router();

const Books = require('../model/bookModel');

router.get('/', async (_req, res) => {
  const books = await Books.getAll();

  res.status(200).json(books);
});

router.get('/search', async (req, res) => {
  const { authorId } = req.query;
  const books = await Books.getAuthorById(authorId);

  if(!books) return res.status(404).json({ message: 'Not found.' })

  return res.status(200).json(books);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const book = await Books.getById(id);

  if (!book) return res.status(404).json({ message: 'Not found' });

  return res.status(200).json(book);
});

router.post('/', async (req, res) => {
  const { title, authorId } = req.body;
  if (Books.isNotValid(title, authorId)) return res.status(400).json({ message: 'Dados inválidos' });

  await Books.create(title, authorId);

  return res.status(201).json({ message: 'Livro criado com sucesso!' })
})

module.exports = router;
