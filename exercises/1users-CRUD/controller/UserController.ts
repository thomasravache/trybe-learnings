import { Router, Request, Response, NextFunction } from 'express';
import UserService from '../service/UserService';
import StatusCodes from '../types/enums/statusCodes';
import userMainInfo from '../types/types/userMainInfo';
import userSchema from './schemas/userSchema';

const userRoutes = Router();

userRoutes.get('/', async (_req: Request, res: Response, next: NextFunction) => {
  const users = await UserService.getAll();

  return res.status(StatusCodes.OK).json(users);
});

userRoutes.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  try {
    const user = await UserService.getById(parseInt(id, 10));

    return res.status(StatusCodes.OK).json(user);
  } catch (e) {
    return next(e);
  }
});

userRoutes.post('/', async (req: Request, res: Response, next: NextFunction) => {
  const newUser: userMainInfo = req.body;

  try {
    userSchema.validate(newUser);

    const createdUser = UserService.create(newUser);

    return res.status(StatusCodes.CREATED).json(createdUser);
  } catch (e) {
    return next(e);
  }
});

userRoutes.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;
  const userNewInfo: userMainInfo = req.body;

  try {
    userSchema.validate(userNewInfo);
    const editedUser = await UserService.editUser({ id: parseInt(id, 10), ...userNewInfo });

    return res.status(StatusCodes.OK).json(editedUser);
  } catch(e) {
    return next(e);
  }
});

userRoutes.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params;

  try {
    await UserService.removeUser(parseInt(id, 10));

    return res.status(StatusCodes.NO_CONTENT).end();
  } catch(e) {
    return next(e);
  }
});

export default userRoutes;
