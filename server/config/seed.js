"use strict";
var user_dao_1 = require('../api/user/dao/user-dao');
var template_dao_1 = require('../api/calculation/dao/template-dao');
var instance_dao_1 = require('../api/calculation/dao/instance-dao');
/**
 * Users
 */
user_dao_1.default.remove({}, function (err) { });
var user = {
    email: 'simon@calcium.engineering',
    password: user_dao_1.default['generateHash']('password'),
    firstName: 'Simon',
    lastName: 'Robb'
};
user_dao_1.default['createUser'](user);
/**
 * Templates
 */
template_dao_1.default.remove({}, function (err) { });
var concreteBeamTmpl = {
    "name": "Concrete beam",
    "templateUrl": "/tpl/concrete-beam.html",
    "inputs": {
        "b": { "required": true, "default": 400 },
        "d": { "required": true, "default": 600 },
        "c": { "required": true, "default": 30 },
        "f_c": { "required": true, "default": 32 },
        "f_y": { "required": true, "default": 500 },
        "A_st": { "required": true }
    },
    "calculation": "ConcreteBeam"
};
template_dao_1.default['createTemplate'](concreteBeamTmpl);
/**
 * Instances
 */
instance_dao_1.default.remove({}, function (err) { });
//# sourceMappingURL=seed.js.map