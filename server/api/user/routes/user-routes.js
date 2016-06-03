"use strict";
var user_controller_1 = require('../controllers/user-controller');
var UserRoutes = (function () {
    function UserRoutes() {
    }
    UserRoutes.init = function (router) {
        router
            .route('/api/users/me')
            .get(user_controller_1.UserController.me);
        router
            .route('/api/users/:id')
            .patch(user_controller_1.UserController.saveUser);
    };
    return UserRoutes;
}());
exports.UserRoutes = UserRoutes;
