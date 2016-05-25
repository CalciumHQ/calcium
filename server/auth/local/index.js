"use strict";
var passport = require('passport');
var passport_local_1 = require('passport-local');
var user_dao_1 = require('../../api/user/dao/user-dao');
var LocalStrategy = (function () {
    function LocalStrategy() {
    }
    LocalStrategy.register = function () {
        passport.use(new passport_local_1.Strategy({
            usernameField: 'email',
            passwordField: 'password'
        }, function (email, password, done) {
            user_dao_1.default['findOne']({ email: email })
                .then(function (user) {
                done(null, user);
            })
                .catch(function (error) { return done(error); });
        }));
    };
    return LocalStrategy;
}());
exports.LocalStrategy = LocalStrategy;
