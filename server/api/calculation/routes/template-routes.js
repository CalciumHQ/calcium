"use strict";
var Template_controller_1 = require('../controller/Template-controller');
var TemplateRoutes = (function () {
    function TemplateRoutes() {
    }
    TemplateRoutes.init = function (router) {
        router
            .route('/api/templates')
            .get(Template_controller_1.TemplateController.getAll);
        router
            .route('/api/templates/:id')
            .get(Template_controller_1.TemplateController.getOne);
    };
    return TemplateRoutes;
}());
exports.TemplateRoutes = TemplateRoutes;
