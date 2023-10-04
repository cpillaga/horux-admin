import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private _refres$ = new Subject<void>();

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${this.authService.getSession().token}`
  });

  get refres$() {
    return this._refres$;
  }

  constructor(private _http: HttpClient) { }

  getProvinces() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = `${environment.url}province`;
    return this._http.get(url, { headers, observe: 'response' });
  }

  getCantons(idProvince) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const url = `${environment.url}canton/${idProvince}`;
    return this._http.get(url, { headers, observe: 'response' });
  }

  postRegisterShop(body: any): Observable<any> {
    const url = `${environment.url}request/shop`;
    return this._http.post<any>(url, body, { headers: this.headers, observe: 'response' }).pipe(
      tap(resp => {
        this._refres$.next();
      })
    );
  }
  postRegisterCarrier(body: any): Observable<any> {
    const url = `${environment.url}request/carrier`;
    return this._http.post<any>(url, body, { headers: this.headers, observe: 'response' }).pipe(
      tap(resp => {
        this._refres$.next();
      })
    );
  }
  postRegisterDriver(body: any): Observable<any> {
    const url = `${environment.url}request/driver`;
    return this._http.post<any>(url, body, { headers: this.headers, observe: 'response' }).pipe(
      tap(resp => {
        this._refres$.next();
      })
    );
  }

  postRegisterEvent(body: any): Observable<any> {
    const url = `${environment.url}request/event`;
    return this._http.post<any>(url, body, { headers: this.headers, observe: 'response' }).pipe(
      tap(resp => {
        this._refres$.next();
      })
    );
  }

  // ? USERS
  // VERIFICA SI EL CORREO, IDENTIFICACION Y TELEFONOS DEL CLIENTE YA ESTAN REGISTRADOS
  verifyCustomer(client) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = `${environment.url}customer/verify/${client.phone}/${client.ci}/${client.email}`;
    return this._http.get(url, { headers, observe: 'response' });
  }

  postCustomer(body) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    const url = `${environment.url}customer`;

    return this._http.post(url, body, { headers, observe: 'response' });
  }


}
