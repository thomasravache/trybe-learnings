import { Application } from 'express';

export interface IRoutes {
  app: Application;
  use(): Application;
};
