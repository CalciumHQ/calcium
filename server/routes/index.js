"use strict";
var auth_routes_1 = require('../auth/auth-routes');
var user_routes_1 = require('../api/user/routes/user-routes');
var calculation_routes_1 = require('../api/calculation/routes/calculation-routes');
var instance_routes_1 = require('../api/calculation/routes/instance-routes');
var index_1 = require('../commons/static/index');
var Routes = (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        auth_routes_1.AuthRoutes.init(router);
        user_routes_1.UserRoutes.init(router);
        calculation_routes_1.CalculationRoutes.init(router);
        instance_routes_1.InstanceRoutes.init(router);
        router
            .route('*')
            .get(index_1.StaticDispatcher.sendIndex);
        app.use('/', router);
    };
    return Routes;
}());
exports.Routes = Routes;
