const connection = require('./connection');

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

module.exports = {
  getAll,
  getAuthorById,
  getById,
};
