"use strict";
var passport = require('passport');
var local_1 = require('../auth/local');
var AuthConfig = (function () {
    function AuthConfig() {
    }
    AuthConfig.init = function (application) {
        local_1.LocalStrategy.register();
        // JwtStrategy.register();
        application.use(passport.initialize());
    };
    return AuthConfig;
}());
exports.AuthConfig = AuthConfig;
