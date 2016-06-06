"use strict";

import * as express from 'express';
import {TemplateController} from '../controller/template-controller';

export class TemplateRoutes {
    static init(router: express.Router) {
      router
        .route('/api/templates')
        .get(TemplateController.getAll);
        
      router
        .route('/api/templates/:id')
        .get(TemplateController.getOne);
    }
}
