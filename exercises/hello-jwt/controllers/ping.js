module.exports = (req, res) => {
  console.log(req.user);
  if (req.user.isAdmin) return res.status(200).json({ message: 'Pong!' });

  return res.status(401).json({ message: 'Você não é o admin' });
};
