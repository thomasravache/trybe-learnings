import { Router, Request, Response, NextFunction } from 'express';
import RestaurantService from '../service/RestaurantService';
import StatusCodes from '../types/enums/statusCodes';
import restaurantMainInfo from '../types/types/restaurantMainInfo';
import restaurantSchema from './schemas/restaurantSchema';

const restaurantRoutes = Router();

const validateRestaurant = (body: restaurantMainInfo): void => {
  const { error } = restaurantSchema.validate(body);

  if (error) throw error;
};

restaurantRoutes.get('/', async (_req: Request, res: Response, _next: NextFunction) => {
  const restaurants = await RestaurantService.getAll();

  return res.status(StatusCodes.OK).json(restaurants);
});

restaurantRoutes.get('/opened', async (_req: Request, res: Response) => {
  const restaurants = await RestaurantService.openedRestaurants();

  return res.status(StatusCodes.OK).json(restaurants);
});

restaurantRoutes.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const restaurant = await RestaurantService.getById(parseInt(id, 10));

    return res.status(StatusCodes.OK).json(restaurant);
  } catch (e) {
    return next(e);
  }
});

restaurantRoutes.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const newRestaurant: restaurantMainInfo = req.body;

  try {
    validateRestaurant(newRestaurant);

    const createdRestaurant = await RestaurantService.create(newRestaurant);

    return res.status(StatusCodes.CREATED).json(createdRestaurant);
  } catch (e) {
    return next(e);
  }
});

restaurantRoutes.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const restaurantNewInfo: restaurantMainInfo = req.body;

  try {
    validateRestaurant(restaurantNewInfo);
    const editedRestaurant = await RestaurantService.editRestaurant({ id: parseInt(id, 10), ...restaurantNewInfo });

    return res.status(StatusCodes.OK).json(editedRestaurant);
  } catch(e) {
    return next(e);
  }
});

restaurantRoutes.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    await RestaurantService.removeRestaurant(parseInt(id, 10));

    return res.status(StatusCodes.NO_CONTENT).end();
  } catch(e) {
    return next(e);
  }
});


export default restaurantRoutes;
