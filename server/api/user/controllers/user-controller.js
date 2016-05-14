"use strict";
var UserController = (function () {
    function UserController() {
    }
    UserController.me = function (req, res) {
        if (!req.user) {
            return res.json(null, 403);
        }
        res.json(req.user, 200);
    };
    return UserController;
}());
exports.UserController = UserController;
