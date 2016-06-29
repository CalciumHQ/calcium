"use strict";

import * as mongoose from 'mongoose';
import environment from './environment';

export class DBConfig {
    static init():void {
      mongoose.connect(environment.mongo.uri);
      mongoose.connection.on('error', console.error.bind(console, 'An error ocurred with the DB connection: '));

      // Populate DB with sample data
      if(environment.seedDB) { require('./seed'); }
    }
};
