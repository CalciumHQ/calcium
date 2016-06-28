"use strict";
/// <reference path="../../typings/browser.d.ts" />
var core_1 = require('@angular/core');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
var router_deprecated_1 = require('@angular/router-deprecated');
var application_cmp_1 = require('./application/components/application-cmp');
var authHttpProvider = core_1.provide(angular2_jwt_1.AuthHttp, {
    useFactory: function (http) {
        return new angular2_jwt_1.AuthHttp(new angular2_jwt_1.AuthConfig({
            headerName: 'Authorization',
            headerPrefix: 'JWT',
            tokenName: 'calcium_jwt',
            globalHeaders: [{ 'Content-Type': 'application/json' }],
            noJwtError: true,
            noTokenScheme: false
        }), http);
    },
    deps: [http_1.Http]
});
platform_browser_dynamic_1.bootstrap(application_cmp_1.ApplicationCmp, [
    http_1.HTTP_PROVIDERS,
    router_deprecated_1.ROUTER_PROVIDERS,
    authHttpProvider
]);
//# sourceMappingURL=main.js.map