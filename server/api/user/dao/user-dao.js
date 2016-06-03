"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
var _ = require('lodash');
var bcrypt = require('bcrypt-nodejs');
var user_model_1 = require('../model/user-model');
user_model_1["default"].static('getOne', function (params) {
    return new Promise(function (resolve, reject) {
        var _query = params;
        User
            .findOne(_query)
            .exec(function (err, user) {
            err ? reject(err)
                : resolve(user);
        });
    });
});
user_model_1["default"].static('createUser', function (user) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(user)) {
            return reject(new TypeError('User is not a valid object.'));
        }
        var _user = new User(user);
        _user.save(function (err, saved) {
            err ? reject(err)
                : resolve(saved);
        });
    });
});
user_model_1["default"].static('generateHash', function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
});
user_model_1["default"].methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};
var User = mongoose.model('User', user_model_1["default"]);
exports.__esModule = true;
exports["default"] = User;
