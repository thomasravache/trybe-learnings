// const fetch = require('node-fetch');
import fetch from 'node-fetch';

const getCepByNumber = async (cep) => {
  const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

  if (!response.ok) return null;

  const address = await response.json();

  if (address.erro) return null;

  return address;
};

// module.exports = {
//   getCepByNumber,
// };

export default {
  getCepByNumber,
}
