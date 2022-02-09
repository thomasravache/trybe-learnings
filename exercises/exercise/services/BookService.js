const { Book } = require('../models');

const findAll = async () => Book.findAll();

const findById = async ({ id }) => {
  const book = await Book.findByPk(id);

  if (!book) throw new Error('Book not found');

  return book;
};

module.exports = {
  findAll,
  findById,
};