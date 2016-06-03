
import * as passport from 'passport';
import {Strategy, ExtractJwt} from 'passport-jwt';
import UserDAO from '../../api/user/dao/user-dao';

export class JwtStrategy {
  
  private static SECRET = 'jk34ty89jlarhgi24g89h432q9324gl9';

  static register() {
  
    passport.use(new Strategy({
        secretOrKey: this.SECRET,
        jwtFromRequest: ExtractJwt.fromAuthHeader()
      }, 
      function(payload, done) {
        UserDAO
          ['findOne']({ _id: payload.user._id })
          .then(user => { 
            if (!user) {
              done(null, false);
            }
            
            done(null, user);
          })
          .catch(error => done(error)); 
      }
    )); 
  }
}