module.exports = (req, res) => {
  const { isAdmin } = req.user;

  if (isAdmin === false) return res.status(403).json({ error: { message: 'Restricted access' } });
  
  return res.status(200).json({ secretInfo: 'Peter Parker é o homem aranha' });
};