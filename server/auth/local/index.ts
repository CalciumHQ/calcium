
import * as passport from 'passport';
import {Strategy} from 'passport-local';
import UserDAO from '../../api/user/dao/user-dao';

export class LocalStrategy {

  static register() {
  
    passport.use(new Strategy({
        usernameField: 'email',
        passwordField: 'password'
      }, 
      function(email, password, done) {
        
        UserDAO
          ['findOne']({ email: email })
          .then(user => {
            
            done(null, user);
          })
          .catch(error => done(error)); 
      }
    )); 
  }
}