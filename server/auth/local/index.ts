
import * as passport from 'passport';
import * as jwt from 'jwt-simple';
import {Strategy} from 'passport-local';
import UserDAO from '../../api/user/dao/user-dao';

export class LocalStrategy {
  
  private static SECRET = 'jk34ty89jlarhgi24g89h432q9324gl9'; 

  static register() {
    
    passport.use('local-signup', new Strategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
      }, (req, email, password, done) => {
        
        UserDAO
          ['findOne']({ email: email })
          .then(user => {
            
            if (user) {
              return done(null, false);
            }
            
            UserDAO
              ['createUser']({
                email: email,
                password: UserDAO['generateHash'](password)
              })
              .then(user => {
                let token = jwt.encode(user, this.SECRET);
                return done(null, token);
              })
              .catch(error => done(error));
          })
          .catch(error => done(error));
      }
    ));
  
    passport.use('local-login', new Strategy({
        usernameField: 'email',
        passwordField: 'password' 
      }, 
      (email, password, done) => {
        console.log(email, password); 
        UserDAO
          ['findOne']({ email: email })
          .then(user => {
            
            if (!user) {
              return done(null, false);
            }
            
            if (!user.validPassword(password)) {
              return done(null, false);
            }
            
            let token = jwt.encode(user, this.SECRET);
            return done(null, token);
          })
          .catch(function(error) {
            done(error);
          }); 
      }
    )); 
  }
}