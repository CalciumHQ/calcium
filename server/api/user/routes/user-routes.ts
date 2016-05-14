"use strict";

import * as express from 'express';
import {UserController} from '../controllers/user-controller';

export class UserRoutes {
    static init(router: express.Router) {
      router
        .route('/api/users/me')
        .get(UserController.me);
    }
}
