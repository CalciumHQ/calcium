'use strict';
if ('production' === process.env.NODE_ENV)
    require('newrelic');
var PORT = process.env.PORT || 8081;
var express = require('express');
var os = require('os');
var http = require('http');
var path = require('path');
var routes_conf_1 = require('./config/routes.conf');
var auth_conf_1 = require('./config/auth.conf');
var db_conf_1 = require('./config/db.conf');
var index_1 = require('./routes/index');
var app = express();
app.use('/tpl', express.static(path.resolve(__dirname + '/commons/static/templates')));
routes_conf_1.RoutesConfig.init(app);
db_conf_1.DBConfig.init();
auth_conf_1.AuthConfig.init(app);
index_1.Routes.init(app, express.Router());
http.createServer(app)
    .listen(PORT, function () {
    console.log("up and running @: " + os.hostname() + " on port: " + PORT);
    console.log("enviroment: " + process.env.NODE_ENV);
});
//# sourceMappingURL=server.js.map