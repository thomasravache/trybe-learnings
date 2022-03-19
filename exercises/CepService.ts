// ./CepService.ts
import { IFooCepAPI } from './interfaces';
import FooCepAPI from './FooCepAPI';

class CepService {
  private readonly cepApi: IFooCepAPI;

  constructor(cepApi: IFooCepAPI) {
    this.cepApi = cepApi;
  }

  addressByCep(cep: string, num: number) {
    return this.cepApi.getAddressByCEP(cep, num);
  }

  cepByAdress(address: string, num: number) {
    return this.cepApi.getCepByAddress(address, num);
  }
}

const cepService = new CepService(new FooCepAPI());

export default cepService;