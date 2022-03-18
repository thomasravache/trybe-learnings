import { Application } from 'express';
import plantController from '../controllers/PlantController';
import { IRoutes } from '../types/interfaces';

export class PlantRoutes implements IRoutes {
  public app: Application;

  constructor(app: Application) {
    this.app = app;
    this.use = this.use.bind(this);
  }

  use(): Application {
    this.app
      .get('/plants', plantController.findAll)
      .post('/plant', plantController.create)
      .put('/plant/:id', plantController.update)
      .delete('/plant/:id', plantController.destroy);

    return this.app;
  }
}
