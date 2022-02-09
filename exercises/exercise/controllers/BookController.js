const express = require('express');
const BookService = require('../services/BookService');

const BookRouter = express.Router();

const findAll = async (req, res, next) => {
  try {
    const books = await BookService.findAll();
    console.log(books);
  
    return res.status(200).json(books);
  } catch (e) {
    return next(e);
  }
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

const updateById = async (req, res, next) => {
  try {
    const { title, author, pageQuantity } = req.body;
    if (!title || !author) throw new Error('Preencher campos obrigatórios');
    const { id } = req.params;

    await BookService.updateById({ id, title, author, pageQuantity });

    return res.status(200).json({ message: 'Livro atualizado com sucesso!' });
  } catch (e) {
    return next(e);
  }
};

const remove = async (req, res, next) => {
  try {
    const { id } = req.params;
    await BookService.remove({ id });

    return res.status(200).json({ message: "Livro removido com sucesso" });
  } catch (e) {
    return next(e);
  }
};

const findByAuthorName = async (req, res, next) => {
  try {
    const { name } = req.params;

    const books = await BookService.findByAuthorName({ authorName: name });

    return res.status(200).json(books);
  } catch (e) {
    return next(e);
  }
};

/* ----- ROTAS ------- */
BookRouter.get('/', findAll);
BookRouter.get('/:id', findById);
BookRouter.post('/', create);
BookRouter.put('/:id', updateById);
BookRouter.delete('/:id', remove);
BookRouter.get('/author/:name', findByAuthorName);

module.exports = {
  BookRouter,
  findAll,
};
