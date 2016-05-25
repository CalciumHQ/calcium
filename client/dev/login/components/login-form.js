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
var common_1 = require('angular2/common');
var router_1 = require('angular2/router');
var auth_service_1 = require('../../auth/services/auth-service');
var LoginForm = (function () {
    function LoginForm(fb, _router, _authService) {
        this._router = _router;
        this._authService = _authService;
        this.loginForm = fb.group({
            "email": ["", common_1.Validators.required],
            "password": ["", common_1.Validators.required]
        });
    }
    LoginForm.prototype.login = function (email, password) {
        var _this = this;
        this._authService
            .login(this.loginForm.value.email, this.loginForm.value.password)
            .subscribe(function (user) {
            _this._router.navigate(['Dashboard']);
        });
    };
    LoginForm = __decorate([
        core_1.Component({
            selector: 'login-form',
            templateUrl: 'client/dev/login/templates/login-form.html'
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(router_1.Router)),
        __param(2, core_1.Inject(auth_service_1.AuthService)), 
        __metadata('design:paramtypes', [common_1.FormBuilder, router_1.Router, auth_service_1.AuthService])
    ], LoginForm);
    return LoginForm;
}());
exports.LoginForm = LoginForm;
