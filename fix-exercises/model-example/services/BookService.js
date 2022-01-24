const Book = require('../models/BookModel');
const Author = require('../models/AuthorModel');

const serialize = (book) => {
  return {
    id: book.id,
    authorId: book.author_id,
    title: book.title
  };
};

const getAll = async () => await Book.getAll().map(serialize);

const getBooksByAuthorId = async (id) => {
  const books = Book.getBooksByAuthorId(id);

  if(books.length === 0) return null;

  return books.map(serialize);
};

const getById = async (id) => {
  const book = await Book.getById(id);

  return book;
}

const create = async (title, authorId) => {
  const authors = await Author.getAll();
  const isNotValidAuthorId = authors.some((author) => author.id !== authorId);

  if (isNotValidAuthorId) throw { error: { code: 'notFound', message: `Não encontramos um ator com o id ${authorId} para realizar a inserção` } };

  return await Book.create(title, authorId);
};

module.exports = {
  getAll,
  getBooksByAuthorId,
  getById,
  create,
}