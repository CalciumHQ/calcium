"use strict";
var passport = require('passport');
var jwt = require('jwt-simple');
var passport_local_1 = require('passport-local');
var user_dao_1 = require('../../api/user/dao/user-dao');
var LocalStrategy = (function () {
    function LocalStrategy() {
    }
    LocalStrategy.register = function () {
        var _this = this;
        passport.use('local-signup', new passport_local_1.Strategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        }, function (req, email, password, done) {
            user_dao_1.default['findOne']({ email: email })
                .then(function (user) {
                if (user) {
                    return done(null, false);
                }
                user_dao_1.default['createUser']({
                    email: email,
                    password: user_dao_1.default['generateHash'](password)
                })
                    .then(function (user) {
                    var token = jwt.encode({ user: user }, _this.SECRET);
                    return done(null, token);
                })
                    .catch(function (error) { return done(error); });
            })
                .catch(function (error) { return done(error); });
        }));
        passport.use('local-login', new passport_local_1.Strategy({
            usernameField: 'email',
            passwordField: 'password'
        }, function (email, password, done) {
            console.log(email, password);
            user_dao_1.default['findOne']({ email: email })
                .then(function (user) {
                if (!user) {
                    return done(null, false);
                }
                if (!user.validPassword(password)) {
                    return done(null, false);
                }
                var token = jwt.encode({ user: user }, _this.SECRET);
                return done(null, token);
            })
                .catch(function (error) {
                done(error);
            });
        }));
    };
    LocalStrategy.SECRET = 'jk34ty89jlarhgi24g89h432q9324gl9';
    return LocalStrategy;
}());
exports.LocalStrategy = LocalStrategy;
