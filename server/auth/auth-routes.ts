"use strict";

import * as express from 'express';
import * as passport from 'passport';
import {AuthController} from './auth-controller';

export class AuthRoutes {
    
    static init(router: express.Router) {
      router
        .route('/auth/signup')
        .post(passport.authenticate('local-signup'), (req: express.Request, res: express.Response) => {
            
            res.json(req.user, 200);
        });
        
      router
        .route('/auth/login') 
        .post(passport.authenticate('local-login'), (req: express.Request, res: express.Response) => {
            
            res.json(req.user, 200);
        });
        
      router
        .route('/auth/logout')
        .get((req: express.Request, res: express.Response) => {
         
            req.logout();
            res.json({}, 200);
        });
    }
}
