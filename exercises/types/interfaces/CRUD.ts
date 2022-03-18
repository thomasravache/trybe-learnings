import { IPlant, IPlantRequest } from './IPlant';

export interface CRUD {
  create(plant: IPlantRequest): Promise<IPlant>;
  findAll(): Promise<IPlant[]>;
  update(plant: IPlant): Promise<void>;
  destroy(plantId: string): Promise<void>
}
