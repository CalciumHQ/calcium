
import {
  Component, 
  Inject,
  OnInit
} from '@angular/core';

import {RouterLink} from '@angular/router-deprecated';
import {AuthService} from '../../auth/services/auth-service';

@Component({
  selector: 'header-cmp',
  directives: [RouterLink],
  templateUrl: 'client/dev/header/templates/header-cmp.html'
})
export class HeaderCmp implements OnInit {
  
  public user:Object;
  
  constructor(@Inject(AuthService) private _authService: AuthService) {

  }
  
  ngOnInit() {
    
    this._authService.currentUser
        .subscribe((u) => this.user = u ); 
  }
  
  logout() {
    
    this._authService
        .logout()
        .subscribe();
  }
}