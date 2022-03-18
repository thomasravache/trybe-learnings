import { Response, Request, NextFunction } from 'express';

export interface IController {
  create(req: Request, res: Response, next?: NextFunction): Promise<Response>;
  findAll(req: Request, res: Response, next?: NextFunction): Promise<Response>;
  update(req: Request, res: Response, next?: NextFunction): Promise<Response>;
  destroy(req: Request, res: Response, next?: NextFunction): Promise<Response>;
}
