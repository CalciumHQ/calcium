"use strict";

import * as express from 'express';
import * as passport from 'passport';
import {AuthController} from './auth-controller';

export class AuthRoutes {
    
    static init(router: express.Router) {
      router
        .route('/auth/signup') 
        .post(AuthController.register);
        
      router
        .route('/auth/login') 
        .post(AuthController.login);
        
      router 
        .route('/auth/logout')
        .get((req: express.Request, res: express.Response) => {
         
            req.logout();
            res.json(200, {});
        });
    }
}
