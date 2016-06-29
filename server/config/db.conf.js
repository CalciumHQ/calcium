"use strict";
var mongoose = require('mongoose');
var environment_1 = require('./environment');
var DBConfig = (function () {
    function DBConfig() {
    }
    DBConfig.init = function () {
        mongoose.connect(environment_1.default.mongo.uri);
        mongoose.connection.on('error', console.error.bind(console, 'An error ocurred with the DB connection: '));
        // Populate DB with sample data
        if (environment_1.default.seedDB) {
            require('./seed');
        }
    };
    return DBConfig;
}());
exports.DBConfig = DBConfig;
;
//# sourceMappingURL=db.conf.js.map