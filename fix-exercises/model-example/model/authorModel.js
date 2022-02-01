const connection = require('./connection');

const getAll = async () => {
  const [authors] = await connection.execute(`
    SELECT * FROM authors
`);

  return authors.map((author) => ({
    id: author.id,
    middleName: author.middle_name,
    lastName: author.last_name,
    birthday: author.birthday,
    nationality: author.nationality,
  }));
};

module.exports = {
  getAll,
}
