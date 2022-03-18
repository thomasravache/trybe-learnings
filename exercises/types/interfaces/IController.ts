import { IPlantRequest, IPlant } from './IPlant';

export interface IController {
  create(body: IPlantRequest): Promise<IPlant>;
  findAll(): Promise<IPlant[]>;
  update(params: string, body: IPlantRequest): Promise<IPlant>;
  destroy(params: string): Promise<void>;
}
