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
var LatexComponent = (function () {
    function LatexComponent(_elementRef) {
        this._elementRef = _elementRef;
        this._mutationObserver = new MutationObserver(this.onContentChanged.bind(this));
    }
    LatexComponent.prototype.ngOnInit = function () {
        this._mutationObserver.observe(this._elementRef.nativeElement.children[0], { childList: true, characterData: true, subtree: true });
    };
    LatexComponent.prototype.onContentChanged = function (list) {
        var latex = list[0].target.data;
        var html = '$' + latex + '$';
        var newLatexEl = document.createElement('SPAN');
        newLatexEl.innerHTML = html;
        if (this._latexEl) {
            this._elementRef.nativeElement.replaceChild(newLatexEl, this._latexEl);
        }
        else {
            this._elementRef.nativeElement.appendChild(newLatexEl);
        }
        this._latexEl = newLatexEl;
        MathJax.Hub.Typeset(this._latexEl);
    };
    LatexComponent = __decorate([
        core_1.Component({
            selector: 'latex',
            template: "<div style=\"display:none\"><ng-content></ng-content></div>"
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], LatexComponent);
    return LatexComponent;
}());
exports.LatexComponent = LatexComponent;
