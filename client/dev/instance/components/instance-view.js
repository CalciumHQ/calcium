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
var round_1 = require("../pipes/round");
var calculation_service_1 = require("../../calculation/services/calculation-service");
var instance_service_1 = require('../../calculation/services/instance-service');
var InstanceView = (function () {
    function InstanceView(fb, _params, _calculateService, _instanceService) {
        var _this = this;
        this._params = _params;
        this._calculateService = _calculateService;
        this._instanceService = _instanceService;
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
        this.scratchpadForm
            .valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(function () { return _this.calculate(); });
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
    InstanceView.prototype.calculate = function () {
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
    InstanceView = __decorate([
        core_1.Component({
            selector: 'instance-view',
            templateUrl: 'client/dev/instance/templates/instance-view.html',
            styleUrls: ['client/dev/instance/styles/instance-view.css'],
            providers: [calculation_service_1.CalculationService, instance_service_1.InstanceService],
            pipes: [round_1.default]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(router_1.RouteParams)),
        __param(2, core_1.Inject(calculation_service_1.CalculationService)),
        __param(3, core_1.Inject(instance_service_1.InstanceService)), 
        __metadata('design:paramtypes', [common_1.FormBuilder, router_1.RouteParams, calculation_service_1.CalculationService, instance_service_1.InstanceService])
    ], InstanceView);
    return InstanceView;
}());
exports.InstanceView = InstanceView;
