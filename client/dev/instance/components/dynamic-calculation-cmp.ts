import {
  Component,
  Inject,
  OnInit
} from 'angular2/core';

import {
  FormBuilder,
  Validators,
  ControlGroup,
  Control,
  FORM_DIRECTIVES,
  FORM_PROVIDERS
} from 'angular2/common';

import Round from "../pipes/round";

import {CalculationService} from "../../calculation/services/calculation-service";
import {InstanceService} from "../../calculation/services/instance-service";

export default function CreateDynamicCalculation(template:string, instance: any, directives:Array<any>) {
  
  @Component({
    selector: 'dynamic-calculation',
    directives: directives,
    providers: [FORM_PROVIDERS, CalculationService],
    pipes: [Round],
    template,
  })
  class DynamicCalculationComponent {
    
    scratchpadForm: ControlGroup;
  
    public output = {
      status: 'default',
      message: '',
      values: {
        Ag: 0,
        Nt: 0,
        phi_Nt: 0
      }
    };
    
    constructor(@Inject(FormBuilder) fb:FormBuilder,
                @Inject(CalculationService) private _calculateService: CalculationService,
                @Inject(InstanceService) private _instanceService: InstanceService) {
                  
      this.scratchpadForm = fb.group({
        "d": [instance.values.d || "12", Validators.required],
        "fy": [instance.values.fy || "500", Validators.required]
      });
      
      this.scratchpadForm
          .valueChanges
          .debounceTime(400)
          .distinctUntilChanged()
          .subscribe(() => this.calculate());
      }
    
    public calculate() {
      
      if (!this.scratchpadForm.valid) {
      
        return; 
      }
      
      this._calculateService
          .calculate({
            d: parseInt(this.scratchpadForm.value.d),
            fy: parseInt(this.scratchpadForm.value.fy)
          }, this.scratchpadForm.value.expression)
          .subscribe((result) => {
            this.output.values = result.values;
            this.output.status = result.status;
            this.output.message = JSON.stringify(result.values);
          });
          
      this._instanceService
          .saveInstance(instance._id, { values: this.scratchpadForm.value })
          .subscribe();
    }
  };
  
  return DynamicCalculationComponent;
}