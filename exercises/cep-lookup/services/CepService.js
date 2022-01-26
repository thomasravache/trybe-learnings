const CepModel = require('../models/CepModel');

const getAll = async () => {
  const ceps = await CepModel.getAll();

  return ceps;
};

const getByCepName = async (name) => {
  const cep = await CepModel.getByCepName(name);
  console.log(cep);

  if (cep.length === 0) throw { code: 'notFound', message: 'CEP não encontrado' };

  return cep[0];
};

module.exports = {
  getAll,
  getByCepName,
};
