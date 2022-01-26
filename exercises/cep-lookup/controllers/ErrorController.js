module.exports = (err, _req, res, _next) => {
  const statusCodes = {
    invalidData: 400,
    notFound: 404,
  };

  const statusCode = statusCodes[err.code];

  if (!statusCode) return res.status(500).json({
    error: {
      code: 'internalServerError',
      message: 'Erro inesperado!',
    }
  });

  return res.status(statusCode).json({
    error: {
      code: err.code,
      message: err.message,
    }
  });
};
