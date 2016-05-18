import {
  Component,
  Inject
} from 'angular2/core';

import {
  FormBuilder,
  Validators,
  ControlGroup,
  Control
} from 'angular2/common';

import Round from "../pipes/round";
import {CalculationService} from "../../calculation/services/calculation-service";

@Component({
  selector: 'scratchpad-cmp',
  templateUrl: 'client/dev/scratchpad/templates/scratchpad.html',
  styleUrls: ['client/dev/scratchpad/styles/scratchpad.css'],
  providers: [CalculationService],
  pipes: [Round]
})
export class ScratchpadCmp {
  
  scratchpadForm: ControlGroup;
  
  public output = {
    status: 'default',
    message: '',
    values: {
      Nt: 0,
      phi_Nt: 0
    }
  };
  
  constructor(@Inject(FormBuilder) fb:FormBuilder, @Inject(CalculationService) private _calculateService: CalculationService) {
    
    this.scratchpadForm = fb.group({
      "d": ["", Validators.required],
      "fy": ["500", Validators.required]
    });
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
  }
}