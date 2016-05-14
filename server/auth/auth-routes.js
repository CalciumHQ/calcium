"use strict";
var passport = require('passport');
var AuthRoutes = (function () {
    function AuthRoutes() {
    }
    AuthRoutes.init = function (router) {
        router
            .route('/auth/login')
            .post(passport.authenticate('local'), function (req, res) {
            res.json(req.user, 200);
        });
    };
    return AuthRoutes;
}());
exports.AuthRoutes = AuthRoutes;
