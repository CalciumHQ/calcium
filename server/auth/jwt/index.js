"use strict";
var passport = require('passport');
var passport_jwt_1 = require('passport-jwt');
var user_dao_1 = require('../../api/user/dao/user-dao');
var JwtStrategy = (function () {
    function JwtStrategy() {
    }
    JwtStrategy.register = function () {
        passport.use('jwt-signup', new passport_jwt_1.Strategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        }, function (req, email, password, done) {
            user_dao_1.default['findOne']({ email: email })
                .then(function (user) {
                if (user) {
                    done(null, false);
                }
                user_dao_1.default['createUser']({
                    email: email,
                    password: user_dao_1.default['generateHash'](password)
                })
                    .then(function (user) {
                    done(null, user);
                })
                    .catch(function (error) { return done(error); });
            })
                .catch(function (error) { return done(error); });
        }));
        passport.use('jwt-login', new passport_jwt_1.Strategy({
            usernameField: 'email',
            passwordField: 'password'
        }, function (email, password, done) {
            user_dao_1.default['findOne']({ email: email })
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
    return JwtStrategy;
}());
exports.JwtStrategy = JwtStrategy;
