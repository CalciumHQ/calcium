"use strict";
var mongoose = require('mongoose');
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
    inputs: {
        type: Object,
        default: {}
    },
    outputs: {
        type: Object,
        default: {}
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { minimize: false });
exports.__esModule = true;
exports["default"] = schema;
