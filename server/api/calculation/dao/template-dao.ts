import * as mongoose from 'mongoose';
import * as Promise from 'bluebird';
import * as _ from 'lodash';
import templateSchema from '../model/template-model';

templateSchema.static('getAll', (params:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = params;

        Template
          .find()
          .exec((err, template) => {
              err ? reject(err)
                  : resolve(template);
          });
    });
});

templateSchema.static('getOne', (params:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
        let _query = params;

        Template
          .findOne(_query)
          .exec((err, template) => {
              err ? reject(err)
                  : resolve(template);
          });
    });
});

templateSchema.static('createTemplate', (template:Object):Promise<any> => {
    return new Promise((resolve:Function, reject:Function) => {
      if (!_.isObject(template)) {
        return reject(new TypeError('Template is not a valid object.'));
      }

      var _template = new Template(template);

      _template.save((err, saved) => {
        err ? reject(err)
            : resolve(saved);
      });
    });
});

let Template = mongoose.model('Template', templateSchema);

export default Template;
