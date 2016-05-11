import * as express from 'express';
import {CalculationRoutes} from '../api/calculation/routes/calculation-routes';
import {StaticDispatcher} from '../commons/static/index';

export class Routes {
   static init(app: express.Application, router: express.Router) {
     CalculationRoutes.init(router);

     router
       .route('*')
       .get(StaticDispatcher.sendIndex);

     app.use('/', router);
   }
}
