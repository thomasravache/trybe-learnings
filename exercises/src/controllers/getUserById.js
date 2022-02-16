// const { User } = require('../models');

module.exports = async (req, res) => {
  const { userId } = req.params;
  const { id } = req.user;

  if (id !== parseInt(userId, 10)) return res.status(401).json({ message: 'Acesso negado' });

  // const user = await User.findOne({ where: { id: userId } });

  // if (!user) return res.status(401).json({ message: 'user not found' });


  return res.status(200).json(req.user);
};
