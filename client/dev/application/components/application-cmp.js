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
var core_1 = require('@angular/core');
var header_cmp_1 = require('../../header/components/header-cmp');
var home_view_1 = require('../../home/components/home-view');
var dashboard_view_1 = require('../../dashboard/components/dashboard-view');
var new_instance_view_1 = require('../../instance/components/new-instance-view');
var instance_view_1 = require('../../instance/components/instance-view');
var login_form_1 = require('../../login/components/login-form');
var auth_service_1 = require('../../auth/services/auth-service');
var router_outlet_1 = require('../../router/components/router-outlet');
var router_deprecated_1 = require('@angular/router-deprecated');
require('rxjs/Rx');
var ApplicationCmp = (function () {
    function ApplicationCmp() {
    }
    ApplicationCmp = __decorate([
        core_1.Component({
            selector: 'application-cmp',
            directives: [header_cmp_1.HeaderCmp, router_outlet_1.LoggedInRouterOutlet],
            providers: [auth_service_1.AuthService],
            templateUrl: 'client/dev/application/templates/application-cmp.html',
        }),
        router_deprecated_1.RouteConfig([
            { name: 'Home', path: '/', component: home_view_1.HomeView },
            { name: 'Login', path: '/login', component: login_form_1.LoginForm },
            { name: 'Dashboard', path: '/dashboard', component: dashboard_view_1.DashboardView },
            { name: 'NewInstance', path: '/calculation/new', component: new_instance_view_1.NewInstanceView },
            { name: 'Instance', path: '/calculation/:id', component: instance_view_1.InstanceView }
        ]), 
        __metadata('design:paramtypes', [])
    ], ApplicationCmp);
    return ApplicationCmp;
}());
exports.ApplicationCmp = ApplicationCmp;
//# sourceMappingURL=application-cmp.js.map