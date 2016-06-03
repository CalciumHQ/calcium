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
export class CalculationService {
  
  static ENDPOINT: string = '/api/calculations/:id';

  constructor(@Inject(AuthHttp) private _http: AuthHttp) {

  }

  calculate(inputs:Object, calculation:string):Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    
    let _stringified = JSON.stringify({
      calculation: calculation,
      inputs: inputs
    });

    return this._http
               .post(CalculationService.ENDPOINT.replace(':id', ''), _stringified, { headers: headers })
               .map((r) => r.json());
  }
}
