/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
"use strict";
var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var application_cmp_1 = require('./application/components/application-cmp');
browser_1.bootstrap(application_cmp_1.ApplicationCmp, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS]);
