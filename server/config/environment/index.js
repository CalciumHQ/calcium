"use strict";
var _ = require('lodash');
// All configurations will inherit these options
// =============================================
var all = {
    // Server port
    port: process.env.OPENSHIFT_NODEJS_PORT ||
        process.env.PORT ||
        8081,
    // MongoDB connection options
    mongo: {
        uri: process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            process.env.OPENSHIFT_MONGODB_DB_URL + process.env.OPENSHIFT_APP_NAME
    },
    // Should the database be seeded upon init
    seedDB: false
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = _.merge(all, require('./' + (process.env.NODE_ENV || 'production') + '.js') || {});
//# sourceMappingURL=index.js.map