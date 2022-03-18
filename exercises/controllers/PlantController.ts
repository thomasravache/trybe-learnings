import { PlantService } from '../service/PlantService';
import { IController, IPlant, IPlantRequest } from '../types/interfaces';
import plantService from '../service/PlantService';

class PlantController implements IController {
  private _plantService: PlantService;

  constructor(plantService: PlantService) {
    this._plantService = plantService;
  }

  public async create(body: IPlantRequest): Promise<IPlant> {
    const createdPlant = await this._plantService.create(body);

    return createdPlant;
  }

  public async findAll(): Promise<IPlant[]> {
    const plants = await this._plantService.findAll();

    return plants;
  }

  public async update(params: string, body: IPlantRequest): Promise<IPlant> {
    await this._plantService.update({ id: params, ...body });

    return {
      id: params,
      ...body
    } as IPlant;
  }

  public async destroy(params: string): Promise<void> {
    await this._plantService.destroy(params);
  }
}

const plantController = new PlantController(plantService);

export default plantController;
