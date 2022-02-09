const { Book } = require('../models');

const findAll = async () => Book.findAll({
  order: [
    ['title', 'ASC'],
    ['created_at', 'ASC']
  ]
});

const findById = async ({ id }) => {
  const book = await Book.findByPk(id);

  if (!book) throw new Error('Book not found');

  return book;
};

const create = async ({ title, author, pageQuantity }) => Book.create({ title, author, pageQuantity });

const updateById = async ({ id, title, author, pageQuantity }) => {
  const [updatedBook] = await Book.update({ title, author, pageQuantity, updatedAt: new Date().toString() }, { where: { id } });

  if (!updatedBook) throw new Error('Book not found');

  return updatedBook
};

const findByAuthorName = async ({ authorName }) => {
  const books = await Book.findAll({ where: { author: authorName } });

  console.log(books);

  // if (!book) throw new Error('Book not found');

  return books;
};

const remove = async ({ id }) => Book.destroy({ where: { id } });

module.exports = {
  findAll,
  findById,
  create,
  updateById,
  remove,
  findByAuthorName,
};