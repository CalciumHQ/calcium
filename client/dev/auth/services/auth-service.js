"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var Observable_1 = require('rxjs/Observable');
var Subject_1 = require('rxjs/Subject');
var http_1 = require('angular2/http');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
        this.currentUserSource = new Subject_1.Subject();
        this.currentUser = this.currentUserSource.asObservable();
        this.checkCurrentUser();
    }
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var _dataStringified = JSON.stringify({
            email: email,
            password: password
        });
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http
            .post(AuthService.LOGIN_ENDPOINT, _dataStringified, { headers: headers })
            .map(function (r) { return r.json(); })
            .do(function (r) { return _this.currentUserSource.next(r); });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http
            .get(AuthService.LOGOUT_ENDPOINT, { headers: headers })
            .map(function (r) { return r.json(); })
            .do(function (r) { return _this.currentUserSource.next(null); });
    };
    AuthService.prototype.checkCurrentUser = function () {
        var _this = this;
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        this._http
            .get(AuthService.USER_ENDPOINT, { headers: headers })
            .map(function (r) { return r.json(); })
            .catch(function (e, o) { return Observable_1.Observable.empty(); })
            .subscribe(function (r) { return _this.currentUserSource.next(r); });
    };
    AuthService.LOGIN_ENDPOINT = '/auth/login';
    AuthService.LOGOUT_ENDPOINT = '/auth/logout';
    AuthService.USER_ENDPOINT = '/api/users/me';
    AuthService = __decorate([
        __param(0, core_1.Inject(http_1.Http))
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
