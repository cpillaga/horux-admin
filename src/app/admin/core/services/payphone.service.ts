import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PayphoneService {

  constructor(
    private _http: HttpClient
  ) { }

  prepareOrder(body, token) {
    let url = 'https://pay.payphonetodoesposible.com/api/button/Prepare';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
      // 'Authorization': 'Bearer BUZiP3qxz7quPJQPrBCvAJzauJW4MlB6aGL8j3sRYVcPW3YzJEQkfEgunUE4f06J2mFd0MXxc3l7ryZRnwDxDONRI7_Snc6vh9pQ4TpsMFYYAJW15O8RZKTKvgGivyc-zxYbJXlARfss77Kcf8sQbujHRWghvQzKTJN1UFncpSGZfvcrxIWZ_GGzhsH6EhOJgpaST14eafW6mdbqt38Q4IZGRA759TQitl1cAQoirUDDwpx3jM_UlbgVthNjBkyQ9wFQIRy9usbkDfCrGVOqiIU0GUOgojnqpNaflw4R-BLECfyrtkR5nwfKVKhTX6FkWySHzqecDGi7pEeB7JvNjq13jwo'
    });

    return this._http.post(url, body, { headers, observe: 'response' });
  }

  confirmOrder(body, token) {
    let url = 'https://pay.payphonetodoesposible.com/api/button/V2/Confirm ';

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this._http.post(url, body, { headers, observe: 'response' });

  }

  getCredentials() {
    let token = localStorage.getItem('token-client-home');

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });

    const url = environment.url + `credentials/transaction`;

    return this._http.get(url, { headers, observe: 'response' });
  }

  getOrder(idOrder) {
    let url = `https://pay.payphonetodoesposible.com/api/Sale/${idOrder}`;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer BUZiP3qxz7quPJQPrBCvAJzauJW4MlB6aGL8j3sRYVcPW3YzJEQkfEgunUE4f06J2mFd0MXxc3l7ryZRnwDxDONRI7_Snc6vh9pQ4TpsMFYYAJW15O8RZKTKvgGivyc-zxYbJXlARfss77Kcf8sQbujHRWghvQzKTJN1UFncpSGZfvcrxIWZ_GGzhsH6EhOJgpaST14eafW6mdbqt38Q4IZGRA759TQitl1cAQoirUDDwpx3jM_UlbgVthNjBkyQ9wFQIRy9usbkDfCrGVOqiIU0GUOgojnqpNaflw4R-BLECfyrtkR5nwfKVKhTX6FkWySHzqecDGi7pEeB7JvNjq13jwo'
    });

    return this._http.get(url, { headers, observe: 'response' });
  }
}
