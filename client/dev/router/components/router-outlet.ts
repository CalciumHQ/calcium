import {
  ViewContainerRef,
  DynamicComponentLoader,
  AttributeMetadata,
  Directive, 
  Attribute,
  Inject
} from '@angular/core';

import {
  Router,
  RouterOutlet,
  ComponentInstruction
} from '@angular/router-deprecated';

import { JwtHelper } from 'angular2-jwt';

@Directive({
  selector: 'router-outlet'
})
export class LoggedInRouterOutlet extends RouterOutlet {
  publicRoutes: Array<string>;
  private router: Router;
  
  constructor(
    _viewContainerRef: ViewContainerRef,
    _loader: DynamicComponentLoader,
    _parentRouter: Router,
    @Attribute('name') nameAttr: string
  ) {
    super(_viewContainerRef, _loader, _parentRouter, nameAttr);
    
    this.router = _parentRouter;
    this.publicRoutes = [
      '', 'login', 'signup'
    ];
  }
  
  activate(instruction: ComponentInstruction) {
    if (this._canActivate(instruction.urlPath)) {
      return super.activate(instruction);
    }
    
    this.router.navigate(['Login']);
  }
  
  _canActivate(url) {

    var user: Object;    
    let storedToken = localStorage.getItem('calcium_jwt');

    if (storedToken) {
      try {
        let jwtHelper = new JwtHelper();
        user = jwtHelper.decodeToken(storedToken);  
      }
      catch (e) {}
    }
    
    return this.publicRoutes.indexOf(url) !== -1
      || user;
  }
}