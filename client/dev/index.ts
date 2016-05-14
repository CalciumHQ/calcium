/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />

import {bootstrap} from 'angular2/platform/browser';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS} from 'angular2/router';

import {ApplicationCmp} from './application/components/application-cmp';

bootstrap(ApplicationCmp, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);