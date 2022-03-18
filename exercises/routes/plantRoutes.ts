import { Router, Request, Response } from 'express';
import plantController from '../controllers/PlantController';
import StatusCodes from '../types/enums/StatusCodes';
import { IPlantRequest } from '../types/interfaces';

const plantRoutes = Router();

plantRoutes.post('/plant', async (req: Request, res: Response) => {
  const createdPlant = await plantController.create(req.body as IPlantRequest);

  return res.status(StatusCodes.CREATED).json(createdPlant);
});
plantRoutes.get('/plants', async (_req: Request, res: Response) => {
  const plants = await plantController.findAll();

  return res.status(StatusCodes.OK).json(plants);
});
plantRoutes.put('/plant/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedPlant = await plantController.update(id as string, req.body as IPlantRequest);

  return res.status(StatusCodes.OK).json(updatedPlant);
});
plantRoutes.delete('/plant/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  await plantController.destroy(id as string);

  return res.status(StatusCodes.OK).end();
});


export default plantRoutes;
