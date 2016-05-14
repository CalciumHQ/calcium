"use strict";
var mongoose = require('mongoose');
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = schema;
