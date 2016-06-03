import {
  Inject,
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs/Observable';

import {
  Headers
} from '@angular/http';

import {
  AuthHttp
} from 'angular2-jwt';

import 'rxjs/add/operator/map';

@Injectable()
export class TemplateService {

  static ENDPOINT: string = '/api/templates/:id';

  constructor(@Inject(AuthHttp) private _http: AuthHttp) {

  }

  getAll():Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    
    return this._http
               .get(TemplateService.ENDPOINT.replace(':id', ''), { headers: headers })
               .map((r) => r.json());
  }  
}
