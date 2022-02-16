// const { User } = require('../models');

module.exports = async (req, res) => {
  const { userName, isAdmin } = req.user;

  return res.status(200).json({ username: userName, admin: isAdmin });
};