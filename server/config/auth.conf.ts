import * as express from 'express';
import * as passport from 'passport';
import {LocalStrategy} from '../auth/local';
import {JwtStrategy} from '../auth/jwt';
import UserDAO from '../api/user/dao/user-dao';

export class AuthConfig {
  
  static init(application: express.Application):void {
    
    LocalStrategy.register(); 
    JwtStrategy.register();
    
    application.use(passport.initialize());
  }
}
