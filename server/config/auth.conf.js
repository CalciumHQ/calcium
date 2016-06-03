"use strict";
var passport = require('passport');
var local_1 = require('../auth/local');
var jwt_1 = require('../auth/jwt');
var AuthConfig = (function () {
    function AuthConfig() {
    }
    AuthConfig.init = function (application) {
        local_1.LocalStrategy.register();
        jwt_1.JwtStrategy.register();
        application.use(passport.initialize());
    };
    return AuthConfig;
}());
exports.AuthConfig = AuthConfig;
