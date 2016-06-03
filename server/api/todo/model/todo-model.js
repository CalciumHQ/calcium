"use strict";
var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    todoMessage: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now }
});
exports.__esModule = true;
exports["default"] = schema;
