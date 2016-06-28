"use strict";
var user_dao_1 = require('../dao/user-dao');
var UserController = (function () {
    function UserController() {
    }
    UserController.me = function (req, res) {
        if (!req.user) {
            return res.json(403, {});
        }
        res.json(req.user, 200);
    };
    UserController.saveUser = function (req, res) {
        var _id = req.params.id;
        var _user = req.body;
        user_dao_1.default['saveUser'](_id, _user)
            .then(function (instance) { return res.status(200).json(instance); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=user-controller.js.map