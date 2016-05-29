"use strict";
var instance_controller_1 = require('../controller/instance-controller');
var InstanceRoutes = (function () {
    function InstanceRoutes() {
    }
    InstanceRoutes.init = function (router) {
        router
            .route('/api/instances')
            .get(instance_controller_1.InstanceController.getAll)
            .post(instance_controller_1.InstanceController.createInstance);
        router
            .route('/api/instances/:id')
            .get(instance_controller_1.InstanceController.getOne)
            .patch(instance_controller_1.InstanceController.saveInstance)
            .delete(instance_controller_1.InstanceController.deleteInstance);
        router
            .route('/api/instances/:id/template')
            .get(instance_controller_1.InstanceController.getTemplate);
    };
    return InstanceRoutes;
}());
exports.InstanceRoutes = InstanceRoutes;
