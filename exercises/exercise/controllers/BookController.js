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

/* ----- ROTAS ------- */
BookRouter.get('/', findAll);
BookRouter.get('/:id', findById);

module.exports = {
  BookRouter,
  findAll,
};
