/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
var router_deprecated_1 = require('@angular/router-deprecated');
var application_cmp_1 = require('./application/components/application-cmp');
platform_browser_dynamic_1.bootstrap(application_cmp_1.ApplicationCmp, [http_1.HTTP_PROVIDERS, router_deprecated_1.ROUTER_PROVIDERS, angular2_jwt_1.AUTH_PROVIDERS]);
