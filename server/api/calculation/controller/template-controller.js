"use strict";
var template_dao_1 = require('../dao/template-dao');
var TemplateController = (function () {
    function TemplateController() {
    }
    TemplateController.getAll = function (req, res) {
        template_dao_1["default"]['getAll']()
            .then(function (templates) { return res.status(200).json(templates); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    TemplateController.getOne = function (req, res) {
        var _id = req.params.id;
        template_dao_1["default"]['getOne']({ _id: req.params.id })
            .then(function (template) { return res.status(200).json(template); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return TemplateController;
}());
exports.TemplateController = TemplateController;
