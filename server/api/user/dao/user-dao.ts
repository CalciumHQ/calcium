import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import * as _ from 'lodash';
import * as bcrypt from 'bcrypt-nodejs';
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

userSchema.static('saveUser', (id:String, user:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = { _id: id };

        User
          .findOneAndUpdate(_query, user, { new: true })
          .exec((err, instance) => {
              err ? reject(err)
                  : resolve(instance);
          });
    });
});

userSchema.static('generateHash', (password:string):boolean => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
});

userSchema.methods.validPassword = function(password) { 
  return bcrypt.compareSync(password, this.password);
};

let User = mongoose.model('User', userSchema);

export default User;
