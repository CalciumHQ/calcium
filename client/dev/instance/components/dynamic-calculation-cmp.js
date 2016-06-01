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
                values: {
                    M_u: 0,
                    phi_M_u: 0
                }
            };
            this.scratchpadForm = fb.group({
                "b": [instance.values.b || "400", common_1.Validators.required],
                "d": [instance.values.d || "600", common_1.Validators.required],
                "f_c": [instance.values.f_c || "32", common_1.Validators.required],
                "A_st": [instance.values.A_st || "", common_1.Validators.required],
                "f_y": [instance.values.f_y || "500", common_1.Validators.required]
            });
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
            this._calculateService
                .calculate({
                b: parseInt(this.scratchpadForm.value.b),
                d: parseInt(this.scratchpadForm.value.d),
                f_c: parseInt(this.scratchpadForm.value.f_c),
                A_st: parseInt(this.scratchpadForm.value.A_st),
                f_y: parseInt(this.scratchpadForm.value.f_y)
            }, this.scratchpadForm.value.expression)
                .subscribe(function (result) {
                _this.output.values = result.values;
                _this.output.status = result.status;
                _this.output.message = JSON.stringify(result.values);
            });
            this._instanceService
                .saveInstance(instance._id, { values: this.scratchpadForm.value })
                .subscribe();
        };
        DynamicCalculationComponent = __decorate([
            core_1.Component({
                selector: 'dynamic-calculation',
                directives: directives,
                providers: [common_1.FORM_PROVIDERS, calculation_service_1.CalculationService],
                pipes: [round_1.default],
                template: template,
            }),
            __param(0, core_1.Inject(common_1.FormBuilder)),
            __param(1, core_1.Inject(calculation_service_1.CalculationService)),
            __param(2, core_1.Inject(instance_service_1.InstanceService)), 
            __metadata('design:paramtypes', [common_1.FormBuilder, calculation_service_1.CalculationService, instance_service_1.InstanceService])
        ], DynamicCalculationComponent);
        return DynamicCalculationComponent;
    }());
    ;
    return DynamicCalculationComponent;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CreateDynamicCalculation;
