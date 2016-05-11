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

import {CalculationService} from "../../calculation/services/calculation-service";

@Component({
  selector: 'scratchpad-cmp',
  templateUrl: 'client/dev/scratchpad/templates/scratchpad.html',
  styleUrls: ['client/dev/scratchpad/styles/scratchpad.css'],
  providers: [CalculationService]
})
export class ScratchpadCmp {
  
  scratchpadForm: ControlGroup;
  
  public output = {
    status: 'default',
    message: ''
  };
  
  constructor(@Inject(FormBuilder) fb:FormBuilder, @Inject(CalculationService) private _calculateService: CalculationService) {
    
    this.scratchpadForm = fb.group({
      "x": ["", Validators.required],
      "y": ["", Validators.required]
    });
  }
  
  public calculate(expression: string, x: string) {
    
    this._calculateService
        .calculate(this.scratchpadForm.value)
        .subscribe((result) => {
          this.output.status = result.status;
          this.output.message = JSON.stringify(result.values);
        });
  }
}