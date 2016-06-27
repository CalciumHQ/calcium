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
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
require('rxjs/add/operator/map');
require('rxjs/add/operator/do');
var AuthService = (function () {
    function AuthService(_http) {
        this._http = _http;
        this._jwtHelper = new angular2_jwt_1.JwtHelper();
        var user;
        var storedToken = this.getJwt();
        if (storedToken) {
            try {
                user = this._jwtHelper.decodeToken(storedToken);
            }
            catch (e) { }
        }
        this.currentUserSource = new BehaviorSubject_1.BehaviorSubject(user);
        this.currentUser = this.currentUserSource.asObservable();
        this.checkCurrentUser();
    }
    AuthService.prototype.saveJwt = function (token) {
        localStorage.setItem('calcium_jwt', token);
    };
    AuthService.prototype.clearJwt = function () {
        localStorage.removeItem('calcium_jwt');
    };
    AuthService.prototype.getJwt = function () {
        return localStorage.getItem('calcium_jwt');
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var _dataStringified = JSON.stringify({
            email: email,
            password: password
        });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var jwtHelper = new angular2_jwt_1.JwtHelper();
        return this._http
            .post(AuthService.LOGIN_ENDPOINT, _dataStringified, { headers: headers })
            .map(function (r) { return r.json(); })
            .do(function (r) { return _this.saveJwt(r.jwt); })
            .map(function (r) { return _this._jwtHelper.decodeToken(r.jwt); })
            .do(function (user) { return _this.currentUserSource.next(user); })
            .catch(this.handleError);
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http
            .get(AuthService.LOGOUT_ENDPOINT, { headers: headers })
            .map(function (r) { return r.json(); })
            .do(function (r) { return _this.clearJwt(); })
            .do(function (r) { return _this.currentUserSource.next(null); });
    };
    AuthService.prototype.checkCurrentUser = function () {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this._http
            .get(AuthService.USER_ENDPOINT, { headers: headers })
            .map(function (r) { return r.json(); })
            .catch(function (e, o) { return Observable_1.Observable.empty(); })
            .subscribe(function (r) { return _this.currentUserSource.next(r); });
    };
    AuthService.prototype.handleError = function (error) {
        console.log(error);
        var jsonErr = error.json();
        var msg = (jsonErr.message) ? jsonErr.message :
            jsonErr.status ? jsonErr.status + " - " + jsonErr.statusText : 'Server error';
        console.error(msg);
        return Observable_1.Observable.throw(msg);
    };
    AuthService.LOGIN_ENDPOINT = '/auth/login';
    AuthService.LOGOUT_ENDPOINT = '/auth/logout';
    AuthService.USER_ENDPOINT = '/api/users/me';
    AuthService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(angular2_jwt_1.AuthHttp)), 
        __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
