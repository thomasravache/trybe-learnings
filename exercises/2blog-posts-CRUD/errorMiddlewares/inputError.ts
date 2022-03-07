import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import StatusCodes from '../types/enums/statusCodes';

const inputError: ErrorRequestHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (err.isJoi) {
    const { details } = err;
    const { message } = details[0];

    return res.status(StatusCodes.BAD_REQUEST).json({ message });
  }

  return next(err);
};

export default inputError;
