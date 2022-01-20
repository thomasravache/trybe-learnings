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

module.exports = {
  getAll,
};
