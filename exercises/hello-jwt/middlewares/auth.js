const jwt = require('jsonwebtoken');

const { User } = require('../models');

const { JWT_SECRET } = process.env;

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ error: 'Token not found' });
  }

  try {
    const payload = jwt.verify(token, JWT_SECRET, { algorithms: 'HS256' });

    const user = await User.findOne({ where: { userName: payload.sub } });

    if (!user) {
      return res.status(401).json({ message: 'Erro ao procurar usuário do token' });
    }

    // console.log(user);

    req.user = user.dataValues;

    return next();
  } catch (e) {
    return res.status(404).json({ message: e.message });
  }
};
