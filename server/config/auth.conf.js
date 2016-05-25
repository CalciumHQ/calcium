"use strict";
var session = require('express-session');
var passport = require('passport');
var local_1 = require('../auth/local');
var user_dao_1 = require('../api/user/dao/user-dao');
var AuthConfig = (function () {
    function AuthConfig() {
    }
    AuthConfig.init = function (application) {
        local_1.LocalStrategy.register();
        passport.serializeUser(this.userSerializer);
        passport.deserializeUser(this.userDeserializer);
        application.use(session({ secret: 'keyboard cat' }));
        application.use(passport.initialize());
        application.use(passport.session());
    };
    AuthConfig.userSerializer = function (user, done) {
        done(null, user._id);
    };
    AuthConfig.userDeserializer = function (id, done) {
        user_dao_1.default['getOne']({ _id: id })
            .then(function (user) { return done(null, user); })
            .catch(function (error) { return done(error); });
    };
    return AuthConfig;
}());
exports.AuthConfig = AuthConfig;
