"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var header_cmp_1 = require('client/dev/header/components/header-cmp');
var scratchpad_cmp_1 = require('client/dev/scratchpad/components/scratchpad-cmp');
var login_form_1 = require('client/dev/login/components/login-form');
var ApplicationCmp = (function () {
    function ApplicationCmp() {
    }
    ApplicationCmp = __decorate([
        core_1.Component({
            selector: 'application-cmp',
            directives: [header_cmp_1.HeaderCmp, router_1.ROUTER_DIRECTIVES],
            templateUrl: 'client/dev/application/templates/application-cmp.html',
        }),
        router_1.RouteConfig([
            { name: 'Home', path: '/', component: scratchpad_cmp_1.ScratchpadCmp },
            { name: 'Login', path: '/login', component: login_form_1.LoginForm }
        ]), 
        __metadata('design:paramtypes', [])
    ], ApplicationCmp);
    return ApplicationCmp;
}());
exports.ApplicationCmp = ApplicationCmp;
