import {
  Component,
  DynamicComponentLoader,
  ViewContainerRef,
  ReflectiveInjector,
  OnInit
} from 'angular2/core';

import {
  FORM_DIRECTIVES,
  FORM_PROVIDERS
} from 'angular2/common';

import {
  RouteParams
} from 'angular2/router';

import {CalculationService} from "../../calculation/services/calculation-service";
import {InstanceService} from "../../calculation/services/instance-service";
import createDynamicCalculation from './dynamic-calculation-cmp';

@Component({
  selector: 'dynamic-calculation-container',
  template: '<div #container></div>'
})
export class DynamicCalculationContainer implements OnInit {
  
  public templateHtml;
  
  constructor(
    private loader: DynamicComponentLoader,
    private viewContainerRef: ViewContainerRef,
    private _params: RouteParams,
    private _instanceService: InstanceService
  ) { }
  
  ngOnInit() {
    this._loadTemplate();
  }
  
  private _loadTemplate() {
    this._instanceService
        .getTemplate(this._params.get('id'))
        .subscribe((template) => {
          this.templateHtml = template; 
          
          let resolvedProviders = ReflectiveInjector.resolve([FORM_PROVIDERS, CalculationService]);
          this.loader.loadNextToLocation(
            createDynamicCalculation(this.templateHtml, [FORM_DIRECTIVES]),
            this.viewContainerRef,
            resolvedProviders
          )
        });
  }
}