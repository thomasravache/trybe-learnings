const { User } = require('../models');

module.exports = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(404).json({ message: 'usuario / senha são obrigatórios' });
  }

  const user = await User.findOne({ where: { userName: username } });

  if (!user) return res.status(401).json({ message: 'usuario ou senha invalidos' });

  return res.status(200).json({ message: 'Login bem sucedido!' });
};
