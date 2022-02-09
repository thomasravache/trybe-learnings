const express = require('express');
const { Book } = require('../models');

const BookRouter = express.Router();

const findAll = async (req, res) => {
  const books = await Book.findAll();
  console.log(books);

  return res.status(200).json(books);
};

/* ----- ROTAS ------- */
BookRouter.get('/', findAll);


module.exports = {
  BookRouter,
  findAll,
};
