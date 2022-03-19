import { IFooCepAPI } from './interfaces';

export class MockCepAPI implements IFooCepAPI {
  async getAddressByCEP(cep: string, number: number): Promise<string> {
    return `${cep} - ${number}`;
  }

  async getCepByAddress(address: string, number: number): Promise<string> {
    return `${address} - ${number}`;
  }
}