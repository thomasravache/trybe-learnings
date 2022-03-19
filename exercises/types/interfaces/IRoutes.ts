import { Application } from 'express';
import { IController } from './IController';

export interface IRoutes {
  app: Application;
  controller: IController;
  use(): Application;
};
