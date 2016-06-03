import {
  ViewContainerRef,
  DynamicComponentLoader,
  AttributeMetadata,
  Directive, 
  Attribute
} from 'angular2/core';

import {
  Router,
  RouterOutlet,
  ComponentInstruction
} from 'angular2/router';

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
    return this.publicRoutes.indexOf(url) !== -1
      || false;
  }
}