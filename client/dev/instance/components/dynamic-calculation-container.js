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
var common_1 = require('angular2/common');
var router_1 = require('angular2/router');
var calculation_service_1 = require("../../calculation/services/calculation-service");
var instance_service_1 = require("../../calculation/services/instance-service");
var dynamic_calculation_cmp_1 = require('./dynamic-calculation-cmp');
var DynamicCalculationContainer = (function () {
    function DynamicCalculationContainer(loader, viewContainerRef, _params, _instanceService) {
        this.loader = loader;
        this.viewContainerRef = viewContainerRef;
        this._params = _params;
        this._instanceService = _instanceService;
    }
    DynamicCalculationContainer.prototype.ngOnInit = function () {
        this._loadTemplate();
    };
    DynamicCalculationContainer.prototype._loadTemplate = function () {
        var _this = this;
        this._instanceService
            .getTemplate(this.instance.template.templateUrl)
            .subscribe(function (template) {
            _this.templateHtml = template;
            var resolvedProviders = core_1.ReflectiveInjector.resolve([common_1.FORM_PROVIDERS, calculation_service_1.CalculationService]);
            _this.loader.loadNextToLocation(dynamic_calculation_cmp_1.default(_this.templateHtml, [common_1.FORM_DIRECTIVES]), _this.viewContainerRef, resolvedProviders);
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DynamicCalculationContainer.prototype, "instance", void 0);
    DynamicCalculationContainer = __decorate([
        core_1.Component({
            selector: 'dynamic-calculation-container',
            template: '<div #container></div>'
        }), 
        __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ViewContainerRef, router_1.RouteParams, instance_service_1.InstanceService])
    ], DynamicCalculationContainer);
    return DynamicCalculationContainer;
}());
exports.DynamicCalculationContainer = DynamicCalculationContainer;
