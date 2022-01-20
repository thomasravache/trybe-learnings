const express = require('express');
const router = express.Router();

const Books = require('../model/Book');

router.get('/', async (_req, res) => {
  const books = await Books.getAll();

  res.status(200).json(books);
});

router.get('/search', async (req, res) => {
  const { authorId } = req.query;
  const books = await Books.getAuthorById(authorId);

  res.status(200).json(books);
});

module.exports = router;
