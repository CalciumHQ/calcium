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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var auth_service_1 = require('../../auth/services/auth-service');
var HeaderCmp = (function () {
    function HeaderCmp(_authService) {
        this._authService = _authService;
    }
    HeaderCmp.prototype.ngOnInit = function () {
        var _this = this;
        this._authService.currentUser
            .subscribe(function (u) {
            console.log(u);
            _this.user = u;
        });
    };
    HeaderCmp.prototype.logout = function () {
        this._authService
            .logout()
            .subscribe();
    };
    HeaderCmp = __decorate([
        core_1.Component({
            selector: 'header-cmp',
            directives: [router_1.RouterLink],
            templateUrl: 'client/dev/header/templates/header-cmp.html'
        }),
        __param(0, core_1.Inject(auth_service_1.AuthService)), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], HeaderCmp);
    return HeaderCmp;
}());
exports.HeaderCmp = HeaderCmp;
