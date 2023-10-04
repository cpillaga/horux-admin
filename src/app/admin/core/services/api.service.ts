import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.getToken()}`
  });

  constructor(private _http: HttpClient) { }
  
  getToken() {
    return localStorage.getItem('tokenP');
  }

  getSession() {
    const url = `${environment.url}admin/session`;

    return this._http.get(url, { headers: this.headers, observe: 'response' });
  }

  getProducts(){
    const url = `${environment.url}product/list`;

    return this._http.get(url, { headers: this.headers, observe: 'response' });
  }

  getProductById(id){
    const url = `${environment.url}product/byId/${id}`;

    return this._http.get(url, { headers: this.headers, observe: 'response' });
  }

  postProduct(body: any){
    const url = `${environment.url}product`;

    return this._http.post(url, body, { headers: this.headers, observe: 'response' });
  }
  
  getCategories(type: string){
    const url = `${environment.url}category/byType/${type}`;

    return this._http.get(url, { headers: this.headers, observe: 'response' });
  }

  postCategory(body: any){
    const url = `${environment.url}category`;

    return this._http.post(url, body, { headers: this.headers, observe: 'response' });
  }
}
