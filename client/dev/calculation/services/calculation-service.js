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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var angular2_jwt_1 = require('angular2-jwt');
require('rxjs/add/operator/map');
var CalculationService = (function () {
    function CalculationService(_http) {
        this._http = _http;
    }
    CalculationService.prototype.calculate = function (inputs, calculation) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var _stringified = JSON.stringify({
            calculation: calculation,
            inputs: inputs
        });
        return this._http
            .post(CalculationService.ENDPOINT.replace(':id', ''), _stringified, { headers: headers })
            .map(function (r) { return r.json(); });
    };
    CalculationService.ENDPOINT = '/api/calculations/:id';
    CalculationService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(angular2_jwt_1.AuthHttp))
    ], CalculationService);
    return CalculationService;
}());
exports.CalculationService = CalculationService;
