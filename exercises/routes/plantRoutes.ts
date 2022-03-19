import { Application } from 'express';
import { IController, IRoutes } from '../types/interfaces';

export class PlantRoutes implements IRoutes {
  public app: Application;
  public controller: IController;

  constructor(app: Application, controller: IController) {
    this.app = app;
    this.controller = controller;
    this.use = this.use.bind(this);
  }

  use(): Application {
    this.app
      .get('/plants', this.controller.findAll)
      .post('/plant', this.controller.create)
      .put('/plant/:id', this.controller.update)
      .delete('/plant/:id', this.controller.destroy);

    return this.app;
  }
}
