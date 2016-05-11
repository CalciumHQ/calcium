"use strict";

import * as express from 'express';
import {CalculationController} from '../controller/calculation-controller';

export class CalculationRoutes {
    static init(router: express.Router) {
      router
        .route('/api/calculations')
        .post(CalculationController.createCalculation);
    }
}
