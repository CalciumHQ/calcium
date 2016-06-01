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
  class DynamicCalculationComponent implements OnInit {
    
    scratchpadForm: ControlGroup;
  
    public output = {
      status: 'default',
      message: '',
      values: {
        M_u: 0,
        phi_M_u: 0
      }
    };
    
    constructor(@Inject(FormBuilder) fb:FormBuilder,
                @Inject(CalculationService) private _calculateService: CalculationService,
                @Inject(InstanceService) private _instanceService: InstanceService) {
                  
      this.scratchpadForm = fb.group({
        "b": [instance.values.b || "400", Validators.required],
        "d": [instance.values.d || "600", Validators.required],
        "f_c": [instance.values.f_c || "32", Validators.required],
        "A_st": [instance.values.A_st || "", Validators.required],
        "f_y": [instance.values.f_y || "500", Validators.required]
      });
      
      this.scratchpadForm
          .valueChanges
          .debounceTime(400)
          .distinctUntilChanged()
          .subscribe(() => this.calculate());
      }
      
    ngOnInit() {
      
    }
    
    public calculate() {
      
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