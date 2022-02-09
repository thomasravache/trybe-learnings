const { Book } = require('../models');

const findAll = async () => Book.findAll();

const findById = async ({ id }) => {
  const book = await Book.findByPk(id);

  if (!book) throw new Error('Book not found');

  return book;
};

const create = async ({ title, author, pageQuantity }) => Book.create({ title, author, pageQuantity });

module.exports = {
  findAll,
  findById,
  create,
};