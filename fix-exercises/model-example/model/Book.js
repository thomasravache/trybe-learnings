const connection = require('./connection');

const getAll = async () => {
  const [book] = await connection.execute('SELECT * FROM books');

  return book;
};

module.exports = {
  getAll,
};
