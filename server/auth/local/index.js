"use strict";
var passport = require('passport');
var passport_local_1 = require('passport-local');
var user_dao_1 = require('../../api/user/dao/user-dao');
var LocalStrategy = (function () {
    function LocalStrategy() {
    }
    LocalStrategy.register = function () {
        passport.use('local-signup', new passport_local_1.Strategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        }, function (req, email, password, done) {
            user_dao_1["default"]['findOne']({ email: email })
                .then(function (user) {
                if (user) {
                    done(null, false);
                }
                user_dao_1["default"]['createUser']({
                    email: email,
                    password: user_dao_1["default"]['generateHash'](password)
                })
                    .then(function (user) {
                    done(null, user);
                })
                    .catch(function (error) { return done(error); });
            })
                .catch(function (error) { return done(error); });
        }));
        passport.use('local-login', new passport_local_1.Strategy({
            usernameField: 'email',
            passwordField: 'password'
        }, function (email, password, done) {
            user_dao_1["default"]['findOne']({ email: email })
                .then(function (user) {
                if (!user) {
                    done(null, false);
                }
                if (!user.validPassword(password)) {
                    done(null, false);
                }
                done(null, user);
            })
                .catch(function (error) { return done(error); });
        }));
    };
    return LocalStrategy;
}());
exports.LocalStrategy = LocalStrategy;
