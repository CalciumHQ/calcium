"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
var _ = require('lodash');
var template_model_1 = require('../model/template-model');
template_model_1.default.static('getAll', function (params) {
    return new Promise(function (resolve, reject) {
        var _query = params;
        Template
            .find()
            .exec(function (err, template) {
            err ? reject(err)
                : resolve(template);
        });
    });
});
template_model_1.default.static('getOne', function (params) {
    return new Promise(function (resolve, reject) {
        var _query = params;
        Template
            .findOne(_query)
            .exec(function (err, template) {
            err ? reject(err)
                : resolve(template);
        });
    });
});
template_model_1.default.static('createTemplate', function (template) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(template)) {
            return reject(new TypeError('Template is not a valid object.'));
        }
        var _template = new Template(template);
        _template.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
var Template = mongoose.model('Template', template_model_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Template;
//# sourceMappingURL=template-dao.js.map