"use strict";
var calculation_controller_1 = require('../controller/calculation-controller');
var CalculationRoutes = (function () {
    function CalculationRoutes() {
    }
    CalculationRoutes.init = function (router) {
        router
            .route('/api/calculations')
            .post(calculation_controller_1.CalculationController.createCalculation);
    };
    return CalculationRoutes;
}());
exports.CalculationRoutes = CalculationRoutes;
//# sourceMappingURL=calculation-routes.js.map