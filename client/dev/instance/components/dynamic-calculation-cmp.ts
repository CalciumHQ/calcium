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
      outputs: instance.outputs
    };
    
    constructor(@Inject(FormBuilder) fb:FormBuilder,
                @Inject(CalculationService) private _calculateService: CalculationService,
                @Inject(InstanceService) private _instanceService: InstanceService) {
      
      let controlHash = {};
      for (let key of Object.keys(instance.template.inputs)) {
        let def = [instance.inputs[key] || instance.template.inputs[key].default];
        if (instance.template.inputs[key].required) { 
          def.push(Validators.required); 
        }
        controlHash[key] = def;
      }            
      this.scratchpadForm = fb.group(controlHash);
      
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
      
      let inputs = {};
      for (let key of Object.keys(instance.template.inputs)) {
        inputs[key] = parseInt(this.scratchpadForm.value[key]);
      }
      
      this._calculateService
          .calculate(inputs, this.scratchpadForm.value.expression)
          .subscribe((result) => {
            this.output.outputs = result.outputs;
            this.output.status = result.status;
            this.output.message = JSON.stringify(result.values);
          });
          
      this._instanceService
          .saveInstance(instance._id, { inputs: this.scratchpadForm.value, outputs: this.output.outputs })
          .subscribe();
    }
  };
  
  return DynamicCalculationComponent;
}