const connection = require('./connection');

const getAll = async () => {
  const [books] = await connection.execute('SELECT * FROM books');

  return books;
};

const getBooksByAuthorId = async (authorId) => {
  const [books] = await connection.execute(`
    SELECT
      *
    FROM
      books
    WHERE
      author_id = ?
  `, [authorId]);

  return books;
};

const getById = async (bookId) => {
  const [book] = await connection.execute(`
    SELECT
      *
    FROM
      books
    WHERE
      id = ?
  `, [bookId]);

  return book;
}

const create = async (title, authorId) => await connection.execute(`
  INSERT INTO books (title, author_id) VALUES (?, ?)
`, [title, authorId]);

module.exports = {
  getAll,
  getBooksByAuthorId,
  getById,
  create,
};
