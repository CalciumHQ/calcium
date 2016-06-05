import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import * as _ from 'lodash';
import instanceSchema from '../model/instance-model';

instanceSchema.static('getAll', (params:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = params;

        Instance
          .find(_query)
          .populate('template')
          .exec((err, instance) => {
              err ? reject(err)
                  : resolve(instance);
          });
    });
});

instanceSchema.static('getOne', (params:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = params;

        Instance
          .findOne(_query)
          .populate('template')
          .exec((err, instance) => {
              err ? reject(err)
                  : resolve(instance);
          });
    });
});

instanceSchema.static('createInstance', (instance:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(instance)) {
        return reject(new TypeError('Instance is not a valid object.'));
      }

      var _instance = new Instance(instance);

      _instance.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
});

instanceSchema.static('saveInstance', (id:String, instance:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = { _id: id };

        Instance
          .findOneAndUpdate(_query, instance, { new: true })
          .populate('template')
          .exec((err, instance) => {
              err ? reject(err)
                  : resolve(instance);
          });
    });
});

let Instance = mongoose.model('Instance', instanceSchema);

export default Instance;
