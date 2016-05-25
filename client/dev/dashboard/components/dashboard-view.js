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
var instance_service_1 = require('../../calculation/services/instance-service');
var DashboardView = (function () {
    function DashboardView(_instanceService) {
        this._instanceService = _instanceService;
        this.instances = [];
    }
    DashboardView.prototype.ngOnInit = function () {
        this._getAllInstances();
    };
    DashboardView.prototype._getAllInstances = function () {
        var _this = this;
        this._instanceService
            .getAll()
            .subscribe(function (instances) {
            _this.instances = instances;
        });
    };
    DashboardView = __decorate([
        core_1.Component({
            selector: 'dashboard-view',
            directives: [router_1.RouterLink],
            templateUrl: 'client/dev/dashboard/templates/dashboard-view.html',
            styleUrls: ['client/dev/dashboard/styles/dashboard-view.css'],
            providers: [instance_service_1.InstanceService]
        }),
        __param(0, core_1.Inject(instance_service_1.InstanceService)), 
        __metadata('design:paramtypes', [instance_service_1.InstanceService])
    ], DashboardView);
    return DashboardView;
}());
exports.DashboardView = DashboardView;
