import plantModel from '../models/PlantModel';
import { CRUD, IPlant, IPlantRequest } from '../types/interfaces';
import { PlantModel } from '../models/PlantModel';

export class PlantService implements CRUD {
  private _plantsModel: PlantModel;

  constructor(plantsModel: PlantModel) {
    this._plantsModel = plantsModel;
    // this._plantsModel.findAll().then(console.log);
  }

  public async create(plant: IPlantRequest): Promise<IPlant> {
    const { breed, needsSun, origin, specialCare, size } = plant;
    
    const waterFrequency = needsSun
    ? size * 0.77 + (origin === 'Brazil' ? 8 : 7)
    : (size / 2) * 1.33 + (origin === 'Brazil' ? 8 : 7);
    
    const newPlant: IPlantRequest = {
      breed,
      needsSun,
      origin,
      specialCare: {
        ...specialCare,
        waterFrequency,
      },
      size,
    };
    const createdPlant = await this._plantsModel.create(newPlant);

    return createdPlant;
  }

  public async findAll(): Promise<IPlant[]> {
    const plants = await this._plantsModel.findAll();
    // console.log(plants);

    return plants;
  }

  public async update(plant: IPlant): Promise<void> {
    await this._plantsModel.update(plant);
  }

  public async destroy(plantId: string): Promise<void> {
    await this._plantsModel.destroy(plantId);
  }
}

const plantService = new PlantService(plantModel);

export default plantService;
