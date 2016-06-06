'use strict';

if ('production' === process.env.NODE_ENV)
    require('newrelic');

var PORT = process.env.PORT || 8081;

import * as express from 'express';
import * as os from 'os';
import * as http from 'http';
import * as path from 'path';
import {RoutesConfig} from './config/routes.conf';
import {AuthConfig} from './config/auth.conf';
import {DBConfig} from './config/db.conf';
import {Routes} from './routes/index';

const app = express();

app.use('/tpl', express.static(path.resolve(__dirname + '/commons/static/templates')));

RoutesConfig.init(app);
DBConfig.init();
AuthConfig.init(app);
Routes.init(app, express.Router());

http.createServer(app)
    .listen(PORT, () => {
      console.log(`up and running @: ${os.hostname()} on port: ${PORT}`);
      console.log(`enviroment: ${process.env.NODE_ENV}`);
    });
