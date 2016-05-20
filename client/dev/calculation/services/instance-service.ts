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
  static TEMPLATE_ENDPOINT: string = '/api/instances/:id/template'

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
  
  getTemplate(id:string):Observable<any> {
     let headers = new Headers();
     
     headers.append('Content-Type', 'application/json');
     
     return this._http
                .get(InstanceService.TEMPLATE_ENDPOINT.replace(':id', id), {headers})
                .map((r) => r.text());
  }
}
