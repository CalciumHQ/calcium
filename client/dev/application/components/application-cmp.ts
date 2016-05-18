
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import {HeaderCmp} from '../../header/components/header-cmp';
import {ScratchpadCmp} from '../../scratchpad/components/scratchpad-cmp';
import {LoginForm} from '../../login/components/login-form';
import {AuthService} from '../../auth/services/auth-service';

import 'rxjs/Rx'

@Component({
  selector: 'application-cmp',
  directives: [HeaderCmp, ROUTER_DIRECTIVES],
  providers: [AuthService],
  templateUrl: 'client/dev/application/templates/application-cmp.html',
})
@RouteConfig([
  { name: 'Home', path: '/', component: ScratchpadCmp },
  { name: 'Login', path: '/login', component: LoginForm }
])
export class ApplicationCmp {
  
}