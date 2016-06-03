import {
  Inject,
  Injectable
} from '@angular/core';

import {
  Observable
} from 'rxjs/Observable';

import {
  BehaviorSubject
} from 'rxjs/BehaviorSubject';

import {
  Headers
} from '@angular/http';

import {
  AuthHttp,
  JwtHelper
} from 'angular2-jwt';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthService {
  static LOGIN_ENDPOINT: string = '/auth/login';
  static LOGOUT_ENDPOINT: string = '/auth/logout';
  static USER_ENDPOINT: string = '/api/users/me';
  
  private _jwtHelper: JwtHelper;
  public currentUserSource: BehaviorSubject<Object>;
  public currentUser: Observable<Object>;

  constructor(
    @Inject(AuthHttp) private _http: AuthHttp
  ) {

    this._jwtHelper = new JwtHelper();
    
    var user: Object;
    let storedToken = this.getJwt();
    
    if (storedToken) {
      try {
        user = this._jwtHelper.decodeToken(storedToken).user;  
      }
      catch (e) {}
    }
    
    this.currentUserSource = new BehaviorSubject<Object>(user);
    this.currentUser = this.currentUserSource.asObservable();
    
    this.checkCurrentUser();
  }
  
  public saveJwt(token:string) {
    localStorage.setItem('calcium_jwt', token);
  }
  
  public clearJwt() {
    localStorage.removeItem('calcium_jwt');
  }
  
  public getJwt():string {
    return localStorage.getItem('calcium_jwt');
  }

  public login(email:string, password:string):Observable<any> {
    let _dataStringified = JSON.stringify({
      email: email,
      password: password
    });
    
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let jwtHelper = new JwtHelper();

    return this._http
               .post(AuthService.LOGIN_ENDPOINT, _dataStringified, { headers: headers})
               .map((r) => r.json())
               .do((r) => this.saveJwt(r))
               .map((r) => this._jwtHelper.decodeToken(r).user)
               .do((r) => this.currentUserSource.next(r));
  }
  
  public logout():Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    
    return this._http
               .get(AuthService.LOGOUT_ENDPOINT, { headers: headers})
               .map((r) => r.json())
               .do((r) => this.clearJwt())
               .do((r) => this.currentUserSource.next(null));
  }
  
  public checkCurrentUser() {
  let headers = new Headers({ 'Content-Type': 'application/json' });

    this._http
        .get(AuthService.USER_ENDPOINT, { headers: headers})
        .map((r) => r.json())
        .catch((e, o) => Observable.empty())
        .subscribe((r) => this.currentUserSource.next(r));
  }
}
