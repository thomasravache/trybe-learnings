const Book = require('../models/BookModel');
const Author = require('../models/AuthorModel');

const serialize = (book) => {
  return {
    id: book.id,
    authorId: book.author_id,
    title: book.title
  };
};

const getAll = async () => {
  const books = await Book.getAll();

  return books.map(serialize);
};

const getBooksByAuthorId = async (id) => {
  const books = await Book.getBooksByAuthorId(id);

  if(books.length === 0) throw {
    code: 'notFound',
    message: `Livros não encontrados para o id ${id} de autor.`,
  };

  return books.map(serialize);
};

const getById = async (id) => {
  const books = await Book.getById(id);

  if (books.length === 0) throw {
    code: 'notFound',
    message: `Autor com o id ${id} não foi encontrado.`,
  }

  return books[0];
}

const create = async (title, authorId) => {
  const authors = await Author.getAll();
  const isNotValidAuthorId = authors.every((author) => author.id !== authorId);

  if (isNotValidAuthorId) throw {
    code: 'notFound',
    message: `Não encontramos um ator com o id ${authorId} para realizar a inserção`,
  };

  return await Book.create(title, authorId);
};

module.exports = {
  getAll,
  getBooksByAuthorId,
  getById,
  create,
}