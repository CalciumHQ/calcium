"use strict";
var user_dao_1 = require('../api/user/dao/user-dao');
var user = {
    email: 'simon@calcium.engineering',
    password: user_dao_1.default['generateHash']('password'),
    firstName: 'Simon',
    lastName: 'Robb'
};
user_dao_1.default['createUser'](user);
//# sourceMappingURL=seed.js.map