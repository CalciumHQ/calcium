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
var common_1 = require('@angular/common');
var round_1 = require("../pipes/round");
var calculation_service_1 = require("../../calculation/services/calculation-service");
var instance_service_1 = require("../../calculation/services/instance-service");
function CreateDynamicCalculation(template, instance, directives) {
    var DynamicCalculationComponent = (function () {
        function DynamicCalculationComponent(fb, _calculateService, _instanceService) {
            var _this = this;
            this._calculateService = _calculateService;
            this._instanceService = _instanceService;
            this.output = {
                status: 'default',
                message: '',
                outputs: instance.outputs
            };
            var controlHash = {};
            for (var _i = 0, _a = Object.keys(instance.template.inputs); _i < _a.length; _i++) {
                var key = _a[_i];
                var def = [instance.inputs[key] || instance.template.inputs[key].default];
                if (instance.template.inputs[key].required) {
                    def.push(common_1.Validators.required);
                }
                controlHash[key] = def;
            }
            this.scratchpadForm = fb.group(controlHash);
            this.scratchpadForm
                .valueChanges
                .debounceTime(400)
                .distinctUntilChanged()
                .subscribe(function () { return _this.calculate(); });
        }
        DynamicCalculationComponent.prototype.ngOnInit = function () {
        };
        DynamicCalculationComponent.prototype.calculate = function () {
            var _this = this;
            if (!this.scratchpadForm.valid) {
                return;
            }
            var inputs = {};
            for (var _i = 0, _a = Object.keys(instance.template.inputs); _i < _a.length; _i++) {
                var key = _a[_i];
                inputs[key] = parseInt(this.scratchpadForm.value[key]);
            }
            this._calculateService
                .calculate(inputs, instance.template.calculation)
                .subscribe(function (result) {
                _this.output.outputs = result.outputs;
                _this.output.status = result.status;
                _this.output.message = JSON.stringify(result.values);
            });
            this._instanceService
                .saveInstance(instance._id, { inputs: this.scratchpadForm.value, outputs: this.output.outputs })
                .subscribe();
        };
        DynamicCalculationComponent = __decorate([
            core_1.Component({
                selector: 'dynamic-calculation',
                directives: directives,
                providers: [common_1.FORM_PROVIDERS, calculation_service_1.CalculationService],
                pipes: [round_1["default"]],
                template: template
            }),
            __param(0, core_1.Inject(common_1.FormBuilder)),
            __param(1, core_1.Inject(calculation_service_1.CalculationService)),
            __param(2, core_1.Inject(instance_service_1.InstanceService))
        ], DynamicCalculationComponent);
        return DynamicCalculationComponent;
    }());
    ;
    return DynamicCalculationComponent;
}
exports.__esModule = true;
exports["default"] = CreateDynamicCalculation;
