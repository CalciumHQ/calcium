import * as mongoose from 'mongoose';

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  calculation: {
    type: String,
    required: true
  },
  templateUrl: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date, 
    default: Date.now
  },
  inputs: {
    type: Object,
    default: {}
  },
  outputs: {
    type: Object,
    default: {}
  }
}, { minimize: false });

export default schema;