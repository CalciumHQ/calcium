import {
  Component,
  Inject,
  OnInit
} from 'angular2/core';

import {
  FormBuilder,
  Validators,
  ControlGroup,
  Control
} from 'angular2/common';

import {
  RouteParams
} from 'angular2/router';

import Round from "../pipes/round";
import {CalculationService} from "../../calculation/services/calculation-service";
import {InstanceService} from '../../calculation/services/instance-service';

@Component({
  selector: 'instance-view',
  templateUrl: 'client/dev/instance/templates/instance-view.html',
  styleUrls: ['client/dev/instance/styles/instance-view.css'],
  providers: [CalculationService, InstanceService],
  pipes: [Round]
})
export class InstanceView implements OnInit {
  
  public instance;
  
  scratchpadForm: ControlGroup;
  
  public output = {
    status: 'default',
    message: '',
    values: {
      Nt: 0,
      phi_Nt: 0
    }
  };
  
  constructor(@Inject(FormBuilder) fb:FormBuilder,
              @Inject(RouteParams) private _params:RouteParams,
              @Inject(CalculationService) private _calculateService: CalculationService,
              @Inject(InstanceService) private _instanceService: InstanceService) {
    
    this.scratchpadForm = fb.group({
      "d": ["", Validators.required],
      "fy": ["500", Validators.required]
    });
    
    this.scratchpadForm
        .valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .subscribe(() => this.calculate());
  }
  
  ngOnInit() {
    
    this._getInstance();
  }
  
  private _getInstance() {
    this._instanceService
        .getOne(this._params.get('id'))
        .subscribe((instance) => {
          this.instance = instance; 
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