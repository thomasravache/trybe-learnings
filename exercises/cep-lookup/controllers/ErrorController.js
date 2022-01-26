module.exports = (err, _req, res, _next) => {
  if (err.isJoi) return res.status(400).json({
    error: {
      code: 'invalidData',
      message: err.details[0].message,
    }
  })
  
  const statusCodes = {
    invalidData: 400,
    notFound: 404,
    alreadyExists: 409,
  };

  const statusCode = statusCodes[err.code];

  if (!statusCode) {
      console.error(err);
      return res.status(500).json({
        error: {
          code: 'internalServerError',
          message: 'Erro inesperado!',
        }
      });
  }

  return res.status(statusCode).json({
    error: {
      code: err.code,
      message: err.message,
    }
  });
};
