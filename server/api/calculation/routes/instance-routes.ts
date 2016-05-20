"use strict";

import * as express from 'express';
import {InstanceController} from '../controller/instance-controller';

export class InstanceRoutes {
    static init(router: express.Router) {
      router
        .route('/api/instances')
        .get(InstanceController.getAll)
        .post(InstanceController.createInstance);
        
      router
        .route('/api/instances/:id')
        .get(InstanceController.getOne)
        .delete(InstanceController.deleteInstance);
        
      router
        .route('/api/instances/:id/template')
        .get(InstanceController.getTemplate); 
    }
}
