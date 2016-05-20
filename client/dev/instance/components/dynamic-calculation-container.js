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
var calculation_service_1 = require("../../calculation/services/calculation-service");
var dynamic_calculation_cmp_1 = require('./dynamic-calculation-cmp');
var DynamicCalculationContainer = (function () {
    function DynamicCalculationContainer(loader, viewContainerRef) {
        this.loader = loader;
        this.viewContainerRef = viewContainerRef;
    }
    DynamicCalculationContainer.prototype.ngOnInit = function () {
        var templateHtml = "\n<form class=\"scratchpad-form\" [ngFormModel]=\"scratchpadForm\">\n  <div class=\"form-group\">\n    <label for=\"\">Enter a bar diameter</label>\n    <div class=\"input-group\">\n      <input ngControl=\"d\" type=\"number\" placeholder=\"12\" class=\"form-control\">\n      <span class=\"input-group-addon\">mm</span>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"\">Enter yield strength of steel</label>\n    <div class=\"input-group\">\n      <input ngControl=\"fy\" type=\"number\" placeholder=\"500\" class=\"form-control\">\n      <span class=\"input-group-addon\">MPa</span>\n    </div>\n  </div>\n\n  <div class=\"form-group\">\n    <label>Tensile Strength</label>\n    <p>Nt = {{ output.values.Nt / 1000 | round:2 }}kN</p>\n    <p>&phi;Nt = {{ output.values.phi_Nt / 1000 | round:2 }}kN</p>\n  </div>\n</form>\n    ";
        var resolvedProviders = core_1.ReflectiveInjector.resolve([common_1.FORM_PROVIDERS, calculation_service_1.CalculationService]);
        this.loader.loadNextToLocation(dynamic_calculation_cmp_1.default(templateHtml, [common_1.FORM_DIRECTIVES]), this.viewContainerRef, resolvedProviders);
    };
    DynamicCalculationContainer = __decorate([
        core_1.Component({
            selector: 'dynamic-calculation-container',
            template: '<div #container></div>'
        }), 
        __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ViewContainerRef])
    ], DynamicCalculationContainer);
    return DynamicCalculationContainer;
}());
exports.DynamicCalculationContainer = DynamicCalculationContainer;
