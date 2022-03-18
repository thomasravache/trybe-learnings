import { PlantService } from '../service/PlantService';
import { IController, IPlantRequest } from '../types/interfaces';
import plantService from '../service/PlantService';
import { Request, Response } from 'express';
import StatusCodes from '../types/enums/StatusCodes';

class PlantController implements IController {
  private _plantService: PlantService;

  constructor(plantService: PlantService) {
    this._plantService = plantService;

    this.findAll = this.findAll.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.destroy = this.destroy.bind(this);
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const plant: IPlantRequest = req.body;

    const createdPlant = await this._plantService.create(plant);

    return res.status(StatusCodes.CREATED).json(createdPlant);
  }

  public async findAll(_req: Request, res: Response): Promise<Response> {
    const plants = await this._plantService.findAll();

    return res.status(StatusCodes.OK).json(plants);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const editedPlant: IPlantRequest = req.body;

    await this._plantService.update({ id, ...editedPlant });

    return res.status(StatusCodes.OK).json({ id, ...editedPlant });
  }

  public async destroy(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    await this._plantService.destroy(id);

    return res.status(StatusCodes.OK).end();
  }
}

const plantController = new PlantController(plantService);

export default plantController;
