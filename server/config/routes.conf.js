"use strict";
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var RoutesConfig = (function () {
    function RoutesConfig() {
    }
    RoutesConfig.init = function (application) {
        var _clientFiles = (process.env.NODE_ENV === 'local') ? '/client/.tmp/' : '/client/dist/';
        var _root = process.cwd();
        application.use(express.static(_root));
        application.use(express.static(_root + _clientFiles));
        application.use(bodyParser.json());
        application.use(morgan('dev'));
        application.use(helmet());
    };
    return RoutesConfig;
}());
exports.RoutesConfig = RoutesConfig;
//# sourceMappingURL=routes.conf.js.map