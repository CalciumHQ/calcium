import {
  Component,
  Inject,
  OnInit
} from '@angular/core';

import {RouterLink} from '@angular/router-deprecated';
import {AuthService} from '../../auth/services/auth-service';

@Component({
  selector: 'home-view',
  directives: [RouterLink],
  templateUrl: 'client/dev/home/templates/home-view.html',
  styleUrls: ['client/dev/home/styles/home-view.css']
})
export class HomeView implements OnInit {
  
  public user:Object;
  
  constructor(
    @Inject(AuthService) private _authService: AuthService
  ) {}
  
  ngOnInit() {
    
    this._authService.currentUser
        .subscribe((u) => this.user = u ); 
  }
}