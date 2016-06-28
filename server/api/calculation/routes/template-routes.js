"use strict";
var template_controller_1 = require('../controller/template-controller');
var TemplateRoutes = (function () {
    function TemplateRoutes() {
    }
    TemplateRoutes.init = function (router) {
        router
            .route('/api/templates')
            .get(template_controller_1.TemplateController.getAll);
        router
            .route('/api/templates/:id')
            .get(template_controller_1.TemplateController.getOne);
    };
    return TemplateRoutes;
}());
exports.TemplateRoutes = TemplateRoutes;
//# sourceMappingURL=template-routes.js.map