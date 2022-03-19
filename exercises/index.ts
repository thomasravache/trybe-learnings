// ./index.ts
import cepService from './CepService';

async function main() {
  // const cepSvc = new CepService();

  console.log('get address by cep', '->', await cepService.addressByCep('xx.xxx-xx', 10));
  console.log('get cep by address', '->', await cepService.cepByAdress('street foo, between bar and baz', 10));
}

main();