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

import {CalculationService} from "../../calculation/services/calculation-service";
import createDynamicCalculation from './dynamic-calculation-cmp';

@Component({
  selector: 'dynamic-calculation-container',
  template: '<div #container></div>'
})
export class DynamicCalculationContainer implements OnInit {
  
  constructor(
    private loader: DynamicComponentLoader,
    private viewContainerRef: ViewContainerRef
  ) { }
  
  ngOnInit() {
    
    const templateHtml = `
<form class="scratchpad-form" [ngFormModel]="scratchpadForm">
  <div class="form-group">
    <label for="">Enter a bar diameter</label>
    <div class="input-group">
      <input ngControl="d" type="number" placeholder="12" class="form-control">
      <span class="input-group-addon">mm</span>
    </div>
  </div>

  <div class="form-group">
    <label for="">Enter yield strength of steel</label>
    <div class="input-group">
      <input ngControl="fy" type="number" placeholder="500" class="form-control">
      <span class="input-group-addon">MPa</span>
    </div>
  </div>

  <div class="form-group">
    <label>Tensile Strength</label>
    <p>Nt = {{ output.values.Nt / 1000 | round:2 }}kN</p>
    <p>&phi;Nt = {{ output.values.phi_Nt / 1000 | round:2 }}kN</p>
  </div>
</form>
    `;
  
    let resolvedProviders = ReflectiveInjector.resolve([FORM_PROVIDERS, CalculationService]);
    
    this.loader.loadNextToLocation(
      createDynamicCalculation(templateHtml, [FORM_DIRECTIVES]),
      this.viewContainerRef,
      resolvedProviders
    )
  }
}