module.exports = (err, _req, res, _next) => {
  console.log(err);
  if (err.isJoi) return res.status(400).json({ error: { message: err.details[0].message } });
  const statusCodes = {
    notFound: 404,
  };

  const statusCode = statusCodes[err.code];
  console.log(statusCode);

  if (!statusCode) {
    console.error(err);
    return res.status(500).json({ error: { message: 'Erro inesperado!' } })
  };

  return res.status(statusCode).json({ error: { message: err.message } });
};
