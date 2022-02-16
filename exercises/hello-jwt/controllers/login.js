const { User } = require('../models');
const jwt = require('jsonwebtoken');
const Joi = require('joi');

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  const { username, password } = req.body;

  const { error } = Joi.object({
    username: Joi.string().not().empty().min(5).required().alphanum(),
    password: Joi.string().not().empty().min(5).required(),
  }).validate({ username, password });

  if (error) return next(error);
  
  const user = await User.findOne({ where: { userName: username } });
  
  if (!user || user.password !== password) return res.status(401).json({ message: 'usuario ou senha invalidos' });
  
  const jwtOptions = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ sub: user.userName, admin: user.isAdmin }, JWT_SECRET, jwtOptions); // token assinado com a minha chave secreta

  return res.status(200).json({ token });
};
