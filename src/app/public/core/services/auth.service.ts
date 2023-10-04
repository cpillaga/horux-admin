import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/admin/core/interfaces/user';
import { catchError, map, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _user: User;

  private _refres$ = new Subject<void>();

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${this.authService.getSession().token}`
  });

  // private headers = new HttpHeaders().set('Authorization', this.token);


  constructor(
    private _http: HttpClient,
    private router: Router
  ) { }

  login(body: any) {

    const path = `${environment.url}auth/login/admin`;
    return this._http.post(path, body, { headers: this.headers, observe: 'response' });
  }


  recoverPassword(body) {
    const url = `${environment.url}password/request/customer`;
    return this._http.post(url, body, { headers: this.headers, observe: 'response' });
  }

  logout() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: this.token
    });

    const url = environment.url + `customer/logout/${this.token}`;

    this._user = null;

    return this._http.delete(url, { headers, observe: 'response' });
  }

  validateToken(): Observable<boolean> { //Retorna ese tipo apara el guard
    return of((this.token.length > 0) ? true : false)
  }

  //! GETTERS

  get refres$() {
    return this._refres$;
  }

  get user() {
    return { ...this._user }
  }

  get token(): string {
    return localStorage.getItem('tokenP') || ('');
  }
}
