/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />

import {bootstrap} from '@angular/platform-browser-dynamic';
import {HTTP_PROVIDERS} from '@angular/http';
import {AuthHttp, AuthConfig, AUTH_PROVIDERS} from 'angular2-jwt';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

import {ApplicationCmp} from './application/components/application-cmp';

bootstrap(ApplicationCmp, [HTTP_PROVIDERS, ROUTER_PROVIDERS, AUTH_PROVIDERS]);