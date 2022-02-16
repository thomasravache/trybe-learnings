const { User } = require('../models');

module.exports = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findOne({ where: { id: userId } });
  // console.log(user);

  if (!user) return res.status(401).json({ message: 'user not found' });

  return res.status(200).json(user);
};
