"use strict";

import * as express from 'express';
import * as passport from 'passport';
import {InstanceController} from '../controller/instance-controller';

export class InstanceRoutes {
    static init(router: express.Router) {
      router
        .route('/api/instances')
        .get(passport.authenticate('jwt', { session: false }), InstanceController.getAll) 
        .post(passport.authenticate('jwt', { session: false }), InstanceController.createInstance);
        
      router
        .route('/api/instances/:id')
        .get(passport.authenticate('jwt', { session: false }), InstanceController.getOne)
        .patch(passport.authenticate('jwt', { session: false }), InstanceController.saveInstance)
        .delete(passport.authenticate('jwt', { session: false }), InstanceController.deleteInstance);
        
      router
        .route('/api/instances/:id/template')
        .get(passport.authenticate('jwt', { session: false }), InstanceController.getTemplate); 
    }
}
