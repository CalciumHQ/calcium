"use strict";
var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: {
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = schema;
