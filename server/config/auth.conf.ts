import * as express from 'express';
import * as session from 'express-session';
import * as passport from 'passport';
import {LocalStrategy} from '../auth/local';
import UserDAO from '../api/user/dao/user-dao';

export class AuthConfig {
  
  static init(application: express.Application):void {
      
    LocalStrategy.register();
    
    passport.serializeUser(this.userSerializer);
    passport.deserializeUser(this.userDeserializer);
    
    application.use(session({ secret: 'keyboard cat' }));
    application.use(passport.initialize());
    application.use(passport.session());
  }
  
  static userSerializer(user, done) {
    
    done(null, user._id);
  }
  
  static userDeserializer(id, done) {
    
    UserDAO
      ['getOne']({ _id: id })
      .then(user => done(null, user))
      .catch(error => done(error));
  }
}
