const connection = require('./connection');
const Author = require('./authorModel');

const serialize = (book) => {
  return {
    id: book.id,
    authorId: book.author_id,
    title: book.title
  };
}

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM books');

  return books.map(serialize);
};

const getAuthorById = async (authorId) => {
  const [books] = await connection.execute(`
    SELECT
      *
    FROM
      books
    WHERE
      author_id = ?
  `, [authorId]);

  if(books.length === 0) return null;

  return books.map(serialize);
};

const getById = async (bookId) => {
  const [books] = await connection.execute(`
    SELECT
      *
    FROM
      books
    WHERE
      id = ?
  `, [bookId]);

  return books[0];
}

const isNotValid = async (title, authorId) => {
  const isValidTitle = (!title || title.length >= 3);
  const authors = await Author.getAll();
  const isValidAuthorId = authors.some((author) => author.id === authorId);
  console.log(isValidAuthorId);

  if (isValidTitle && isValidAuthorId) return true;

  return false;
}

const create = async (title, authorId) => await connection.execute(`
  INSERT INTO books (title, author_id) VALUES (?, ?)
`, [title, authorId]);

module.exports = {
  getAll,
  getAuthorById,
  getById,
  create,
  isNotValid,
};
