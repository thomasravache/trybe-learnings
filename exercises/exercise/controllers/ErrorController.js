const statusCodes = {
  'Book not found': 404,
  'Preencher campos obrigatórios': 404,
}

module.exports = (err, req, res, next) => {
  if (err.message) {
    const statusCode = statusCodes[err.message];

    return res.status(statusCode).json({ message: err.message });
  }

  console.error(err);
  return res.status(500).json({ message: 'Erro inesperado!' });
};
