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
export class TemplateService {

  static ENDPOINT: string = '/api/templates/:id';

  constructor(@Inject(Http) private _http: Http) {

  }

  getAll():Observable<any> {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this._http
               .get(TemplateService.ENDPOINT.replace(':id', ''), {headers})
               .map((r) => r.json());
  }  
}
