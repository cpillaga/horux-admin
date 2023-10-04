import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContificoService {
  token = 'FrguR1kDpFHaXHLQwplZ2CwTX3p8p9XHVTnukL98V5U';
  
  constructor(
    private _http: HttpClient
  ) { }

  createInvoice(body){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
    });

    const url = `${environment.URL_CONTIFICO}documento/`;

    return this._http.post(url, body, {headers, observe: 'response'});
  }
}
