const express = require('express');
const BookService = require('../services/BookService');

const BookRouter = express.Router();

const findAll = async (req, res) => {
  const books = await BookService.findAll();
  console.log(books);

  return res.status(200).json(books);
};

const findById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const book = await BookService.findById({ id });

    return res.status(200).json(book);
  } catch (e) {
    return next(e)
  }
};

const create = async (req, res, next) => {
  try {
    const { title, author, pageQuantity } = req.body;
    console.log(author);
    if (!title || !author) throw new Error('Preencher campos obrigatórios');

    const newBook = await BookService.create({ title, author, pageQuantity });

    return res.status(201).json(newBook);
  } catch (e) {
    return next(e);
  }
};

/* ----- ROTAS ------- */
BookRouter.get('/', findAll);
BookRouter.get('/:id', findById);
BookRouter.post('/', create);

module.exports = {
  BookRouter,
  findAll,
};
