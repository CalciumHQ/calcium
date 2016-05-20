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
var common_1 = require('angular2/common');
var router_1 = require('angular2/router');
var instance_service_1 = require('../../calculation/services/instance-service');
var calculation_service_1 = require("../../calculation/services/calculation-service");
var dynamic_calculation_container_1 = require('./dynamic-calculation-container');
var InstanceView = (function () {
    function InstanceView(fb, _params, _instanceService) {
        this._params = _params;
        this._instanceService = _instanceService;
        this.output = {
            status: 'default',
            message: ''
        };
    }
    InstanceView.prototype.ngOnInit = function () {
        this._getInstance();
    };
    InstanceView.prototype._getInstance = function () {
        var _this = this;
        this._instanceService
            .getOne(this._params.get('id'))
            .subscribe(function (instance) {
            _this.instance = instance;
        });
    };
    InstanceView = __decorate([
        core_1.Component({
            selector: 'instance-view',
            templateUrl: 'client/dev/instance/templates/instance-view.html',
            styleUrls: ['client/dev/instance/styles/instance-view.css'],
            providers: [instance_service_1.InstanceService, calculation_service_1.CalculationService],
            directives: [dynamic_calculation_container_1.DynamicCalculationContainer]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(router_1.RouteParams)),
        __param(2, core_1.Inject(instance_service_1.InstanceService))
    ], InstanceView);
    return InstanceView;
}());
exports.InstanceView = InstanceView;
