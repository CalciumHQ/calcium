"use strict";var __decorate=this&&this.__decorate||function(e,o,t,r){var i,c=arguments.length,n=3>c?o:null===r?r=Object.getOwnPropertyDescriptor(o,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,o,t,r);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(n=(3>c?i(n):c>3?i(o,t,n):i(o,t))||n);return c>3&&n&&Object.defineProperty(o,t,n),n},__metadata=this&&this.__metadata||function(e,o){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,o):void 0},__param=this&&this.__param||function(e,o){return function(t,r){o(t,r,e)}},core_1=require("@angular/core"),common_1=require("@angular/common"),todo_service_1=require("../services/todo-service"),TodoCmp=function(){function e(e,o){this._todoService=o,this.title="ng2do",this.todos=[],this.todoForm=e.group({todoMessage:["",common_1.Validators.required]})}return e.prototype.ngOnInit=function(){this._getAll()},e.prototype._getAll=function(){var e=this;this._todoService.getAll().subscribe(function(o){e.todos=o})},e.prototype.add=function(e){var o=this;this._todoService.add(e).subscribe(function(e){o.todos.push(e),o.todoForm.controls.todoMessage.updateValue("")})},e.prototype.remove=function(e){var o=this;this._todoService.remove(e).subscribe(function(){o.todos.forEach(function(t,r){return t._id===e?o.todos.splice(r,1):void 0})})},e=__decorate([core_1.Component({selector:"todo-cmp",templateUrl:"client/dev/todo/templates/todo.html",styleUrls:["client/dev/todo/styles/todo.css"],providers:[todo_service_1.TodoService]}),__param(0,core_1.Inject(common_1.FormBuilder)),__param(1,core_1.Inject(todo_service_1.TodoService)),__metadata("design:paramtypes",[common_1.FormBuilder,todo_service_1.TodoService])],e)}();exports.TodoCmp=TodoCmp;