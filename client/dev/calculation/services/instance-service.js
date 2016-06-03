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
var http_1 = require('angular2/http');
require('rxjs/add/operator/map');
var InstanceService = (function () {
    function InstanceService(_http) {
        this._http = _http;
    }
    InstanceService.prototype.getAll = function () {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http
            .get(InstanceService.ENDPOINT.replace(':id', ''), { headers: headers })
            .map(function (r) { return r.json(); });
    };
    InstanceService.prototype.getOne = function (id) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http
            .get(InstanceService.ENDPOINT.replace(':id', id), { headers: headers })
            .map(function (r) { return r.json(); });
    };
    InstanceService.prototype.add = function (instance) {
        var headers = new http_1.Headers();
        var stringified = JSON.stringify(instance);
        headers.append('Content-Type', 'application/json');
        return this._http
            .post(InstanceService.ENDPOINT.replace(':id', ''), stringified, { headers: headers })
            .map(function (r) { return r.json(); });
    };
    InstanceService.prototype.saveInstance = function (id, instance) {
        var headers = new http_1.Headers();
        var stringified = JSON.stringify(instance);
        headers.append('Content-Type', 'application/json');
        return this._http
            .patch(InstanceService.ENDPOINT.replace(':id', id), stringified, { headers: headers })
            .map(function (r) { return r.json(); });
    };
    InstanceService.prototype.getTemplate = function (url) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this._http
            .get(url, { headers: headers })
            .map(function (r) { return r.text(); });
    };
    InstanceService.ENDPOINT = '/api/instances/:id';
    InstanceService = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http))
    ], InstanceService);
    return InstanceService;
}());
exports.InstanceService = InstanceService;
