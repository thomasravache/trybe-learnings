const connection = require('./connection');

const serialize = (movie) => {
  return {
    title: movie.title,
    directedBy: movie.directed_by,
    releaseYear: movie.release_year,
  }
};

const create = async ({ title, directedBy, releaseYear }) => {
  const query = `
    INSERT INTO movies (title, directed_by, release_year)
    VALUES (?, ?, ?)
  `

  const [result] = await connection.execute(query, [title, directedBy, releaseYear]);

  return {
    id: result.insertId,
  };
};

const getById = async ({ id }) => {
  const query = `
    SELECT title, directed_by, release_year FROM movies WHERE id = ?
  `;

  const [result] = await connection.execute(query, [id]);

  return result.map(serialize);
};

module.exports = {
  create,
  getById,
};
