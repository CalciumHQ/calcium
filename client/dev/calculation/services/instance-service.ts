import {
  Inject,
  Injectable
} from 'angular2/core';

import {
  Observable
} from 'rxjs/Observable';

import {
  Http,
  Headers
} from 'angular2/http';

import 'rxjs/add/operator/map';

@Injectable()
export class InstanceService {
  
  static ENDPOINT: string = '/api/instances/:id';

  constructor(@Inject(Http) private _http: Http) {

  }

  getAll():Observable<any> {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this._http
               .get(InstanceService.ENDPOINT.replace(':id', ''), {headers})
               .map((r) => r.json());
  }
  
  getOne(id:string):Observable<any> {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this._http
               .get(InstanceService.ENDPOINT.replace(':id', id), {headers})
               .map((r) => r.json());
  }
  
  add(instance:Object):Observable<any> {
    let headers = new Headers();
    let stringified = JSON.stringify(instance);

    headers.append('Content-Type', 'application/json');

    return this._http
               .post(InstanceService.ENDPOINT.replace(':id', ''), stringified, {headers})
               .map((r) => r.json());
  }
  
  saveInstance(id:string, instance:Object):Observable<any> {
    let headers = new Headers();
    let stringified = JSON.stringify(instance);

    headers.append('Content-Type', 'application/json');

    return this._http
               .patch(InstanceService.ENDPOINT.replace(':id', id), stringified, {headers})
               .map((r) => r.json());
  }
  
  getTemplate(url:string):Observable<any> {
     let headers = new Headers();
     
     headers.append('Content-Type', 'application/json');
     
     return this._http
                .get(url, {headers})
                .map((r) => r.text());
  }
}
