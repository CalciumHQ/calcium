"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
var _ = require('lodash');
var instance_model_1 = require('../model/instance-model');
instance_model_1.default.static('getAll', function (params) {
    return new Promise(function (resolve, reject) {
        var _query = params;
        Instance
            .find(_query)
            .populate('template')
            .exec(function (err, instance) {
            err ? reject(err)
                : resolve(instance);
        });
    });
});
instance_model_1.default.static('getOne', function (params) {
    return new Promise(function (resolve, reject) {
        var _query = params;
        Instance
            .findOne(_query)
            .populate('template')
            .exec(function (err, instance) {
            err ? reject(err)
                : resolve(instance);
        });
    });
});
instance_model_1.default.static('createInstance', function (instance) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(instance)) {
            return reject(new TypeError('Instance is not a valid object.'));
        }
        var _instance = new Instance(instance);
        _instance.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
instance_model_1.default.static('saveInstance', function (id, instance) {
    return new Promise(function (resolve, reject) {
        var _query = { _id: id };
        Instance
            .findOneAndUpdate(_query, instance, { new: true })
            .populate('template')
            .exec(function (err, instance) {
            err ? reject(err)
                : resolve(instance);
        });
    });
});
instance_model_1.default.static('deleteInstance', function (id) {
    return new Promise(function (resolve, reject) {
        var _query = { _id: id };
        Instance
            .remove(_query)
            .exec(function (err) {
            err ? reject(err)
                : resolve();
        });
    });
});
var Instance = mongoose.model('Instance', instance_model_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Instance;
