const connection = require('./connection');

const getAll = async () => {
  const query = `
    SELECT * FROM ceps
  `;

  const [ceps] = await connection.execute(query);

  return ceps;
};

const getByCepName = async (name) => {
  const query = `
    SELECT * FROM ceps WHERE cep = ?
  `;

  const [cep] = await connection.execute(query, [name]);

  return cep;
};

module.exports = {
  getAll,
  getByCepName,
};
