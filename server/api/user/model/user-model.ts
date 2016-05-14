import * as mongoose from 'mongoose';

var schema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  createdAt: {
    type: Date, 
    default: Date.now
  }
});

export default schema;
