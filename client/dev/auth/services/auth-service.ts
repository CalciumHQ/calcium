import {
  Inject
} from 'angular2/core';

import {
  Observable
} from 'rxjs/Observable';

import {
  Subject
} from 'rxjs/Subject';

import {
  Http,
  Headers
} from 'angular2/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

export class AuthService {
  static LOGIN_ENDPOINT: string = '/auth/login';
  static LOGOUT_ENDPOINT: string = '/auth/logout';
  static USER_ENDPOINT: string = '/api/users/me';
  
  private currentUserSource = new Subject<Object>();
  public currentUser = this.currentUserSource.asObservable();

  constructor(@Inject(Http) private _http: Http) {

    this.checkCurrentUser();
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
               .map((r) => r.json())
               .do((r) => this.currentUserSource.next(r));
  }
  
  public logout():Observable<any> {
    
    let headers = new Headers();
    
    headers.append('Content-Type', 'application/json');
    
    return this._http
               .get(AuthService.LOGOUT_ENDPOINT, null, {headers})
               .map((r) => r.json())
               .do((r) => this.currentUserSource.next(null));
  }
  
  public checkCurrentUser():Observable<any> {
    let headers = new Headers();

    headers.append('Content-Type', 'application/json');

    this._http
        .get(AuthService.USER_ENDPOINT, null, {headers})
        .map((r) => r.json())
        .subscribe((r) => this.currentUserSource.next(r));
  }
}
