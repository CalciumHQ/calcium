
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';

import {HeaderCmp} from 'client/dev/header/components/header-cmp';
import {ScratchpadCmp} from 'client/dev/scratchpad/components/scratchpad-cmp';
import {LoginForm} from 'client/dev/login/components/login-form';

@Component({
  selector: 'application-cmp',
  directives: [HeaderCmp, ROUTER_DIRECTIVES],
  templateUrl: 'client/dev/application/templates/application-cmp.html',
})
@RouteConfig([
  { name: 'Home', path: '/', component: ScratchpadCmp },
  { name: 'Login', path: '/login', component: LoginForm }
])
export class ApplicationCmp {
   
}