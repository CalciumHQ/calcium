"use strict";
var path = require('path');
var instance_dao_1 = require('../dao/instance-dao');
var InstanceController = (function () {
    function InstanceController() {
    }
    InstanceController.getAll = function (req, res) {
        instance_dao_1.default['getAll']({ owner: req.user._id })
            .then(function (instances) { return res.status(200).json(instances); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    InstanceController.getOne = function (req, res) {
        var _id = req.params.id;
        instance_dao_1.default['getOne']({ _id: req.params.id })
            .then(function (instance) { return res.status(200).json(instance); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    InstanceController.createInstance = function (req, res) {
        var _instance = req.body;
        _instance.owner = req.user._id;
        instance_dao_1.default['createInstance'](_instance)
            .then(function (instance) { return res.status(201).json(instance); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    InstanceController.deleteInstance = function (req, res) {
        var _id = req.params.id;
        instance_dao_1.default['deleteInstance'](_id)
            .then(function () { return res.status(200).end(); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    InstanceController.saveInstance = function (req, res) {
        var _id = req.params.id;
        var _instance = req.body;
        instance_dao_1.default['saveInstance'](_id, _instance)
            .then(function (instance) { return res.status(200).json(instance); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    InstanceController.getTemplate = function (req, res) {
        var templatePath = path.resolve(__dirname + '/../templates/test/TestCalculation.html');
        res.status(200).sendFile(templatePath);
    };
    return InstanceController;
}());
exports.InstanceController = InstanceController;
