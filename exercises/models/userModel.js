const connection = require('./connection');

const serialize = (userData) => {
  return {
    id: userData.id,
    firstName: userData.first_name,
    lastName: userData.last_name,
    email: userData.email,
    password: userData.password,
  };
}

const getAll = async () => {
  const [users] = await connection.execute(`
    SELECT * FROM user
  `);

  return users.map(serialize);
};

const getById = async (id) => {
  const [user] = await connection.execute(`
    SELECT * FROM user WHERE id = ?
  `, [id]);

  return user.map(serialize);
};

const validate = (firstName, lastName, email, password) => {
  const everyIsNull = [firstName, lastName, email, password].every((field) => !field);

  if (everyIsNull) throw { error: true, message: 'Todos os campos são obrigatórios' };
  if (!firstName) throw { error: true, message: 'O campo "firstName" é obrigatório' };
  if (!lastName) throw { error: true, message: 'O campo "lastName" é obrigatório' };
  if (!email) throw { error: true, message: 'O campo "email" é obrigatório' };
  if (!password) throw { error: true, message: 'O campo "password" é obrigatório' };
  if (password.length < 6) throw { error: true, message: 'O campo "password" deve ter pelo menos 6 caracteres' };
};

const create = async (firstName, lastName, email, password) => {
  validate(firstName, lastName, email, password);

  const [newUser] = await connection.execute(`INSERT INTO user (first_name, last_name, email, password) VALUES (?, ?, ?, ?)`,
  [firstName, lastName, email, password]);

  return newUser;
};

const update = async (id, firstName, lastName, email, password) => {
  validate(firstName, lastName, email, password);

  const [modificatedUser] = await connection.execute(`
    UPDATE
      user
    SET
      first_name = ?,
      last_name = ?,
      email = ?,
      password = ?
    WHERE
      id = ?
  `, [firstName, lastName, email, password, id]);

  return modificatedUser;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};
