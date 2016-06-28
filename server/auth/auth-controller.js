"use strict";
var passport = require('passport');
var AuthController = (function () {
    function AuthController() {
    }
    AuthController.register = function (req, res, next) {
        passport.authenticate('local-signup', function (err, user, info) {
            if (!user) {
                return AuthController.error(res, info.message);
            }
            AuthController.success(req, res, next, user);
        })(req, res, next);
    };
    AuthController.login = function (req, res, next) {
        passport.authenticate('local-login', function (err, user, info) {
            if (!user) {
                return AuthController.error(res, info.message);
            }
            AuthController.success(req, res, next, user);
        })(req, res, next);
    };
    AuthController.error = function (res, message) {
        res.json();
        return res.json(401, { message: message });
    };
    AuthController.success = function (req, res, next, user) {
        return res.json(200, { jwt: user });
    };
    return AuthController;
}());
exports.AuthController = AuthController;
//# sourceMappingURL=auth-controller.js.map