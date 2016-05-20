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
            .delete(instance_controller_1.InstanceController.deleteInstance);
    };
    return InstanceRoutes;
}());
exports.InstanceRoutes = InstanceRoutes;
