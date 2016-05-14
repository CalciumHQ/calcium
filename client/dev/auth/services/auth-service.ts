import {
  Inject
} from 'angular2/core';

import {
  Observable
} from 'rxjs/Observable';

import {
  Http,
  Headers
} from 'angular2/http';

import 'rxjs/add/operator/map';

export class AuthService {
  static LOGIN_ENDPOINT: string = '/auth/login';
  static USER_ENDPOINT: string = '/api/users/me';

  constructor(@Inject(Http) private _http: Http) {

  }

  public login(email:string, password:string):Observable<any> {
    let _dataStringified = JSON.stringify({
      email: email,
      password: password
    });

    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this._http
               .post(AuthService.LOGIN_ENDPOINT, _dataStringified, {headers})
               .map((r) => r.json());
  }
  
  public getCurrentUser(email:string, password:string):Observable<any> {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    return this._http
               .get(AuthService.USER_ENDPOINT, null, {headers})
               .map((r) => r.json());
  }
}
