/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {Http, HTTP_PROVIDERS} from '@angular/http';
import {AuthHttp, AuthConfig} from 'angular2-jwt';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {ApplicationCmp} from './application/components/application-cmp';

let authHttpProvider = provide(AuthHttp, {
  useFactory: (http) => {
    return new AuthHttp(new AuthConfig({
      // headerName: YOUR_HEADER_NAME,
      // headerPrefix: YOUR_HEADER_PREFIX,
      tokenName: 'calcium_jwt',
      globalHeaders: [{'Content-Type':'application/json'}],
      noJwtError: true,
      noTokenScheme: true
    }), http);
  },
  deps: [Http]
});

bootstrap(ApplicationCmp, [
  HTTP_PROVIDERS, 
  ROUTER_PROVIDERS, 
  authHttpProvider
]);