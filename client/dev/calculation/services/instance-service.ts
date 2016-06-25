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
export class InstanceService {
  
  static ENDPOINT: string = '/api/instances/:id';

  constructor(
    @Inject(AuthHttp) private _http: AuthHttp
  ) {}

  getAll():Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    
    return this._http
               .get(InstanceService.ENDPOINT.replace(':id', ''), { headers: headers })
               .map((r) => r.json());
  }
  
  getOne(id:string):Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    
    return this._http
               .get(InstanceService.ENDPOINT.replace(':id', id), { headers: headers })
               .map((r) => r.json());
  }
  
  add(instance:Object):Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let stringified = JSON.stringify(instance);

    return this._http
               .post(InstanceService.ENDPOINT.replace(':id', ''), stringified, { headers: headers })
               .map((r) => r.json());
  }
  
  saveInstance(id:string, instance:Object):Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let stringified = JSON.stringify(instance);

    return this._http
               .patch(InstanceService.ENDPOINT.replace(':id', id), stringified, { headers: headers })
               .map((r) => r.json());
  }

  deleteInstance(id:string):Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });

    return this._http
               .delete(InstanceService.ENDPOINT.replace(':id', id), { headers: headers });
  }
  
  getTemplate(url:string):Observable<any> {
     
     return this._http
                .get(url)
                .map((r) => r.text());
  }
}
