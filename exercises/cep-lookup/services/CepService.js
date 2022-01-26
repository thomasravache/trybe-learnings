// const CepModel = require('../models/CepModel');
import CepModel from '../models/CepModel.js'
import ViaCep from '../models/external-api/viacep.js';

const isValidCep = (cep) => {
  const isValidCep = /\d{5}-\d{3}/;

  if (cep.length !== 9) return false;

  return isValidCep.test(cep) ? true : false;
}

const getAll = async () => {
  const ceps = await CepModel.getAll();

  return ceps;
};

const getByCepNumber = async (cepNumber) => {
  if (!isValidCep(cepNumber)) throw { code: 'invalidData', message: 'CEP inválido' };
  
  const cep = await CepModel.getByCepNumber(cepNumber);

  if (cep.length === 0) {
    const viaCepApiCep = await ViaCep.getCepByNumber(cepNumber);

    if (!viaCepApiCep) throw { code: 'notFound', message: 'CEP não encontrado' };

    const { cep, logradouro, bairro, localidade, uf } = viaCepApiCep;
    await CepModel.create(cep, logradouro, bairro, localidade, uf);

    return {
      cep,
      logradouro,
      bairro,
      localidade,
      uf,
    };
  };

  return cep[0];
};

const create = async (cep, logradouro, bairro, localidade, uf) => {
  if (!isValidCep(cep)) throw { code: 'invalidData', message: 'CEP inválido' };

  const allCeps = await CepModel.getAll();
  const alreadyExists = allCeps.some((data) => data.cep === cep);

  if (alreadyExists) throw { code: 'alreadyExists', message: 'CEP já existente' };

  return await CepModel.create(cep, logradouro, bairro, localidade, uf);
};

// module.exports = {
//   getAll,
//   getByCepNumber,
//   create,
// };

export default {
  getAll,
  getByCepNumber,
  create,
}
