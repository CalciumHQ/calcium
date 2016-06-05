
import {Component} from '@angular/core';

import {HeaderCmp} from '../../header/components/header-cmp';
import {HomeView} from '../../home/components/home-view';
import {DashboardView} from '../../dashboard/components/dashboard-view';
import {NewInstanceView} from '../../instance/components/new-instance-view';
import {InstanceView} from '../../instance/components/instance-view';
import {LoginForm} from '../../login/components/login-form';
import {AuthService} from '../../auth/services/auth-service';
import {LoggedInRouterOutlet} from '../../router/components/router-outlet';

import {ROUTER_DIRECTIVES, RouteConfig} from '@angular/router-deprecated';

import 'rxjs/Rx'

@Component({
  selector: 'application-cmp',
  directives: [HeaderCmp, LoggedInRouterOutlet],
  providers: [AuthService],
  templateUrl: 'client/dev/application/templates/application-cmp.html',
})
@RouteConfig([
  { name: 'Home', path: '/', component: HomeView },
  { name: 'Login', path: '/login', component: LoginForm },
  { name: 'Dashboard', path: '/dashboard', component: DashboardView },
  { name: 'NewInstance', path: '/calculation/new', component: NewInstanceView },
  { name: 'Instance', path: '/calculation/:id', component: InstanceView }
])
export class ApplicationCmp {
}