const connection = require('./connection');

const create = async (firstName, lastName, email, password) => {
  const everyIsNull = [firstName, lastName, email, password].every((field) => !field);

  if (everyIsNull) throw { error: true, message: 'Todos os campos são obrigatórios' };
  if (!firstName) throw { error: true, message: 'O campo "firstName" é obrigatório' };
  if (!lastName) throw { error: true, message: 'O campo "lastName" é obrigatório' };
  if (!email) throw { error: true, message: 'O campo "email" é obrigatório' };
  if (!password) throw { error: true, message: 'O campo "password" é obrigatório' };
  if (password.length < 6) throw { error: true, message: 'O campo "password" deve ter pelo menos 6 caracteres' };

  const [newUser] = await connection.execute(`INSERT INTO user (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`,
  [firstName, lastName, email, password]);
  return newUser;
};

module.exports = {
  create,
};
