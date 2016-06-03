"use strict";
var passport = require('passport');
var instance_controller_1 = require('../controller/instance-controller');
var InstanceRoutes = (function () {
    function InstanceRoutes() {
    }
    InstanceRoutes.init = function (router) {
        router
            .route('/api/instances')
            .get(passport.authenticate('jwt', { session: false }), instance_controller_1.InstanceController.getAll)
            .post(passport.authenticate('jwt', { session: false }), instance_controller_1.InstanceController.createInstance);
        router
            .route('/api/instances/:id')
            .get(passport.authenticate('jwt', { session: false }), instance_controller_1.InstanceController.getOne)
            .patch(passport.authenticate('jwt', { session: false }), instance_controller_1.InstanceController.saveInstance)
            .delete(passport.authenticate('jwt', { session: false }), instance_controller_1.InstanceController.deleteInstance);
        router
            .route('/api/instances/:id/template')
            .get(passport.authenticate('jwt', { session: false }), instance_controller_1.InstanceController.getTemplate);
    };
    return InstanceRoutes;
}());
exports.InstanceRoutes = InstanceRoutes;
