"use strict";
var user_dao_1 = require('../api/user/dao/user-dao');
var template_dao_1 = require('../api/calculation/dao/template-dao');
var user = {
    email: 'simon@calcium.engineering',
    password: user_dao_1.default['generateHash']('password'),
    firstName: 'Simon',
    lastName: 'Robb'
};
user_dao_1.default['createUser'](user);
var concreteBeamTmpl = {
    "name": "Concrete beam",
    "templateUrl": "/tpl/concrete-beam.html",
    "inputs": {
        "b": { "required": true, "default": 400 },
        "d": { "required": true, "default": 600 },
        "f_c": { "required": true, "default": 32 },
        "f_y": { "required": true, "default": 500 },
        "A_st": { "required": true }
    },
    "calculation": "ConcreteBeam"
};
template_dao_1.default['createTemplate'](concreteBeamTmpl);
//# sourceMappingURL=seed.js.map