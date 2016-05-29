import * as mongoose from 'mongoose';

var schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  template: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Template',
    required: true
  },
  values: {
    type: Object,
    default: {}
  },
  createdAt: {
    type: Date, 
    default: Date.now
  }
}, { minimize: false });

export default schema;