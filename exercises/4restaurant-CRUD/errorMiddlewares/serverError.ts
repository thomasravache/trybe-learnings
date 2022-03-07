import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import StatusCodes from '../types/enums/statusCodes';

const serverError: ErrorRequestHandler = (err: any, _req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Erro inesperado' });
};

export default serverError;
