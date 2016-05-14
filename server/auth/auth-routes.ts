"use strict";

import * as express from 'express';
import * as passport from 'passport';
import {AuthController} from './auth-controller';

export class AuthRoutes {
    
    static init(router: express.Router) {
      router
        .route('/auth/login')
        .post(passport.authenticate('local'), function(req: express.Request, res: express.Response) {
            
            res.json(req.user, 200);
        });
    }
}
