"use strict";
var auth_controller_1 = require('./auth-controller');
var AuthRoutes = (function () {
    function AuthRoutes() {
    }
    AuthRoutes.init = function (router) {
        router
            .route('/auth/signup')
            .post(auth_controller_1.AuthController.register);
        router
            .route('/auth/login')
            .post(auth_controller_1.AuthController.login);
        router
            .route('/auth/logout')
            .get(function (req, res) {
            req.logout();
            res.json(200, {});
        });
    };
    return AuthRoutes;
}());
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=auth-routes.js.map