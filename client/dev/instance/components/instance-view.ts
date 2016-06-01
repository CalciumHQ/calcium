import {
  Component,
  DynamicComponentLoader,
  ViewContainerRef,
  Inject,
  Injector,
  Provider,
  ReflectiveInjector,
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

import {
  RouteParams
} from 'angular2/router';

import {RouterLink} from 'angular2/router';
import {ActionBar} from '../../action-bar/components/action-bar';

import {InstanceService} from '../../calculation/services/instance-service';
import {CalculationService} from "../../calculation/services/calculation-service";
import {DynamicCalculationContainer} from './dynamic-calculation-container';

@Component({
  selector: 'instance-view',
  templateUrl: 'client/dev/instance/templates/instance-view.html',
  styleUrls: ['client/dev/instance/styles/instance-view.css'],
  providers: [InstanceService, CalculationService],
  directives: [RouterLink, ActionBar, DynamicCalculationContainer]
})
export class InstanceView implements OnInit {
  
  public instance;
  public scratchpadForm: ControlGroup;
  
  public output = {
    status: 'default',
    message: ''
  };
  
  constructor(@Inject(FormBuilder) fb:FormBuilder,
              @Inject(RouteParams) private _params:RouteParams,
              @Inject(InstanceService) private _instanceService: InstanceService) {
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
}