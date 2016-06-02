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
export class CalculationService {
  
  static ENDPOINT: string = '/api/calculations/:id';

  constructor(@Inject(Http) private _http: Http) {

  }

  calculate(inputs:Object, calculation:string):Observable<any> {
    let _stringified = JSON.stringify({
      calculation: calculation,
      inputs: inputs
    });

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this._http
               .post(CalculationService.ENDPOINT.replace(':id', ''), _stringified, {headers})
               .map((r) => r.json());
  }
}
