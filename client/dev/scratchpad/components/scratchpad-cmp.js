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
var round_1 = require("../pipes/round");
var calculation_service_1 = require("../../calculation/services/calculation-service");
var ScratchpadCmp = (function () {
    function ScratchpadCmp(fb, _calculateService) {
        this._calculateService = _calculateService;
        this.output = {
            status: 'default',
            message: '',
            values: {
                Nt: 0,
                phi_Nt: 0
            }
        };
        this.scratchpadForm = fb.group({
            "d": ["", common_1.Validators.required],
            "fy": ["500", common_1.Validators.required]
        });
    }
    ScratchpadCmp.prototype.calculate = function () {
        var _this = this;
        if (!this.scratchpadForm.valid) {
            return;
        }
        this._calculateService
            .calculate({
            d: parseInt(this.scratchpadForm.value.d),
            fy: parseInt(this.scratchpadForm.value.fy)
        }, this.scratchpadForm.value.expression)
            .subscribe(function (result) {
            _this.output.values = result.values;
            _this.output.status = result.status;
            _this.output.message = JSON.stringify(result.values);
        });
    };
    ScratchpadCmp = __decorate([
        core_1.Component({
            selector: 'scratchpad-cmp',
            templateUrl: 'client/dev/scratchpad/templates/scratchpad.html',
            styleUrls: ['client/dev/scratchpad/styles/scratchpad.css'],
            providers: [calculation_service_1.CalculationService],
            pipes: [round_1["default"]]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(calculation_service_1.CalculationService))
    ], ScratchpadCmp);
    return ScratchpadCmp;
}());
exports.ScratchpadCmp = ScratchpadCmp;
