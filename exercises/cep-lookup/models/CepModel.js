// const connection = require('./connection');
import connection from './connection.js';

const formatedCep = (cepData) => {
  const CEP_REGEX = /\d{5}-\d{3}/;

  if (CEP_REGEX.test(cepData)) return cepData;

  return cepData.replace(/(\d{5})(\d{3})/, '$1-$2');
};

const serializeCep = (cepData) => {
  return {
    cep: formatedCep(cepData.cep),
    logradouro: cepData.logradouro,
    bairro: cepData.bairro,
    localidade: cepData.localidade,
    uf: cepData.uf,
  }
};

const turnCepReadable = (cep) => cep.replace('-', '');

const getAll = async () => {
  const query = `
    SELECT * FROM ceps
  `;

  const [ceps] = await connection.execute(query);

  console.log(ceps.map(serializeCep));

  return ceps.map(serializeCep);
};

const getByCepNumber = async (cepNumber) => {
  const readableCep = turnCepReadable(cepNumber);
  const query = `
    SELECT * FROM ceps WHERE cep = ?
  `;

  const [cep] = await connection.execute(query, [readableCep]);

  return cep.map(serializeCep);
};

const create = async (cep, logradouro, bairro, localidade, uf) => {
  const readableCep = turnCepReadable(cep);
  const query = `
    INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)
  `;

  return await connection.execute(query, [readableCep, logradouro, bairro, localidade, uf]);
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
};
