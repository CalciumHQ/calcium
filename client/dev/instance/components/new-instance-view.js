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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_deprecated_1 = require('@angular/router-deprecated');
var router_deprecated_2 = require('@angular/router-deprecated');
var action_bar_1 = require('../../action-bar/components/action-bar');
var instance_service_1 = require('../../calculation/services/instance-service');
var template_service_1 = require('../../calculation/services/template-service');
var NewInstanceView = (function () {
    function NewInstanceView(fb, _router, _instanceService, _templateService) {
        var _this = this;
        this._router = _router;
        this._instanceService = _instanceService;
        this._templateService = _templateService;
        this.templates = [];
        this.newInstanceForm = fb.group({
            "name": ["", common_1.Validators.required],
            "template": ["", common_1.Validators.required]
        });
        this._templateService
            .getAll()
            .subscribe(function (templates) {
            _this.templates = templates;
        });
    }
    NewInstanceView.prototype.submit = function () {
        var _this = this;
        this._instanceService
            .add(this.newInstanceForm.value)
            .subscribe(function (instance) {
            _this._router.navigate(['Instance', { id: instance._id }]);
        });
    };
    NewInstanceView = __decorate([
        core_1.Component({
            selector: 'new-instance-view',
            directives: [router_deprecated_2.RouterLink, action_bar_1.ActionBar],
            templateUrl: 'client/dev/instance/templates/new-instance-view.html',
            styleUrls: ['client/dev/instance/styles/new-instance-view.css'],
            providers: [instance_service_1.InstanceService, template_service_1.TemplateService]
        }),
        __param(0, core_1.Inject(common_1.FormBuilder)),
        __param(1, core_1.Inject(router_deprecated_1.Router)),
        __param(2, core_1.Inject(instance_service_1.InstanceService)),
        __param(3, core_1.Inject(template_service_1.TemplateService)), 
        __metadata('design:paramtypes', [common_1.FormBuilder, router_deprecated_1.Router, instance_service_1.InstanceService, template_service_1.TemplateService])
    ], NewInstanceView);
    return NewInstanceView;
}());
exports.NewInstanceView = NewInstanceView;
