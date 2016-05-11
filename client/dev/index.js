/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />
"use strict";
var browser_1 = require('angular2/platform/browser');
var http_1 = require('angular2/http');
var scratchpad_cmp_1 = require('./scratchpad/components/scratchpad-cmp');
browser_1.bootstrap(scratchpad_cmp_1.ScratchpadCmp, [http_1.HTTP_PROVIDERS]);
