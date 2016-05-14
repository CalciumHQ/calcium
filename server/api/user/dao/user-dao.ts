import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import * as _ from 'lodash';
import userSchema from '../model/user-model';

userSchema.static('getOne', (params:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = params;

        User
          .findOne(_query)
          .exec((err, user) => {
              err ? reject(err)
                  : resolve(user);
          });
    });
});

userSchema.static('createUser', (user:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(user)) {
        return reject(new TypeError('User is not a valid object.'));
      }

      var _user = new User(user);

      _user.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
});

let User = mongoose.model('User', userSchema);

export default User;
