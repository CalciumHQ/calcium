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

import {
  Router
} from 'angular2/router';

import {RouterLink} from 'angular2/router';
import {ActionBar} from '../../action-bar/components/action-bar';

import {InstanceService} from '../../calculation/services/instance-service';
import {TemplateService} from '../../calculation/services/template-service';

@Component({
  selector: 'new-instance-view',
  directives: [RouterLink, ActionBar],
  templateUrl: 'client/dev/instance/templates/new-instance-view.html',
  styleUrls: ['client/dev/instance/styles/new-instance-view.css'],
  providers: [InstanceService, TemplateService]
})
export class NewInstanceView {
  
  newInstanceForm: ControlGroup;
  templates: Array<any> = [];
  
  constructor(
    @Inject(FormBuilder) fb:FormBuilder,
    @Inject(Router) private _router: Router,
    @Inject(InstanceService) private _instanceService: InstanceService,
    @Inject(TemplateService) private _templateService: TemplateService
  ) {
    
    this.newInstanceForm = fb.group({
      "name": ["", Validators.required],
      "template": ["", Validators.required]
    });
    
    this._templateService
        .getAll()
        .subscribe((templates) => {
          this.templates = templates;
        });
  }
  
  public submit() {
    this._instanceService
        .add(this.newInstanceForm.value)
        .subscribe((instance) => {
          this._router.navigate(['Instance', { id: instance._id }]);
        });
  }
}