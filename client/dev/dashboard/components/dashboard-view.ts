import {
  Component,
  Inject,
  OnInit
} from 'angular2/core';

import {RouterLink} from 'angular2/router';

import {InstanceService} from '../../calculation/services/instance-service';

@Component({
  selector: 'dashboard-view',
  directives: [RouterLink],
  templateUrl: 'client/dev/dashboard/templates/dashboard-view.html',
  styleUrls: ['client/dev/dashboard/styles/dashboard-view.css'],
  providers: [InstanceService]
})
export class DashboardView implements OnInit {
  
  public instances = []
  
  constructor(@Inject(InstanceService) private _instanceService: InstanceService) {
    
  }
  
  ngOnInit() {
    this._getAllInstances();
  }
  
  private _getAllInstances():void { 
    this._instanceService
        .getAll()
        .subscribe((instances) => {
          this.instances = instances; 
        });
  }
}