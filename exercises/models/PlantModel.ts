import { CRUD, IPlant, IPlantRequest } from '../types/interfaces';
import { DataBaseConnection } from './connection';

export class PlantModel implements CRUD {
  private _connection: DataBaseConnection<IPlant>;

  constructor(connection: DataBaseConnection<IPlant>) {
    this._connection = connection;
  }

  public async create(plant: IPlantRequest): Promise<IPlant> {
    const plants = await this._connection.read();
    const id = `${new Date().getTime()}${Buffer.from(JSON.stringify(plant), 'base64').toString('base64')}`;
    
    const createdPlant = { id, ...plant };
    
    plants.push(createdPlant);

    await this._connection.write(plants);

    return createdPlant;
  }

  public async findAll(): Promise<IPlant[]> {
    const plants = await this._connection.read();

    return plants;
  }

  public async update(plant: IPlant): Promise<void> {
    const plants: IPlant[] = await this._connection.read();
    const plantIndex = plants.findIndex(({ id }) => plant.id === id);

    plants.splice(plantIndex, 1, plant);

    await this._connection.write(plants);
  }

  public async destroy(plantId: string): Promise<void> {
    const plants: IPlant[] = await this._connection.read();
    const plantIndex = plants.findIndex(({ id }) => plantId === id);

    plants.splice(plantIndex, 1);

    await this._connection.write(plants);
  }
}

const connection = new DataBaseConnection<IPlant>('./plants.json');
const plantModel = new PlantModel(connection);

export default plantModel;
