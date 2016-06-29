"use strict";

import * as express from 'express';
import * as passport from 'passport';

export class AuthController {

  static register(req: express.Request, res: express.Response, next?) {
    passport.authenticate('local-signup', (err, user, info) => {
      if (!user) {
        return AuthController.error(res, (info ? info.message : null));
      }

      AuthController.success(req, res, next, user)
    })(req, res, next);
  }

  static login(req: express.Request, res: express.Response, next?) {
    passport.authenticate('local-login', (err, user, info) => { 
      if (!user) {
        return AuthController.error(res, (info ? info.message : null));
      }

      AuthController.success(req, res, next, user);
    })(req, res, next);
  }
  
  static error(res: express.Response, message) {
    return res.json(401, { message: message });
  }

  static success(req: express.Request, res: express.Response, next, user) { 
    return res.json(200, { jwt: user });
  }
}
