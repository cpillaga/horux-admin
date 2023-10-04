import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private _refres$ = new Subject<void>();

  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${this.authService.getSession().token}`
  });

  get refres$() {
    return this._refres$;
  }

  constructor(private _http: HttpClient) { }

  getEventsByCategory(word = '', city = '') {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let url = `${environment.url}events-byCategory`;

    if (city !== "") url = `events-byCategory?status=${status}`;
    if (word !== "") url = `events-byCategory?word=${word}&status=${status}`;

    return this._http.get(url, { headers, observe: 'response' });
  }

  getEventsFilterCategory(word = '', city = '') {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    let url = `${environment.url}filterCategory`;

    if (city !== "") url = `events-byCategory?status=${status}`;
    if (word !== "") url = `events-byCategory?word=${word}&status=${status}`;

    // return this._http.get(url, { headers, observe: 'response' });
    return this._http.get<any>(url, { headers: this.headers }).pipe(map((events: any) => events));
  }

  getAllEvents() {
    let url = `${environment.url}events/filter-category/Todos`;
    return this._http.get<any>(url, { headers: this.headers }).pipe(map((events: any) => events));
  }

  getCantons() {
    const url = `${environment.url}canton-search`;
    return this._http.get(url, { headers: this.headers, observe: 'response' });
  }


  getEventByCategory(word = "", city = "") {
    let parameters = "";
    let idCustomer = localStorage.getItem('idClient') || "";

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let url = "";

    if (word !== "") {
      parameters = parameters + `?word=${word}`;
    }

    if (idCustomer !== "") {
      if (parameters === "") {
        parameters = parameters + `?id=${idCustomer}`;
      } else {
        parameters = parameters + `&id=${idCustomer}`;
      }
    }

    if (city !== "") {
      if (parameters === "") {
        parameters = parameters + `?city=${city}`;
      } else {
        parameters = parameters + `&city=${city}`;
      }
    }

    url = `${environment.url}events-byCategory${parameters}`;

    return this._http.get(url, { headers, observe: 'response' });
  }

  // Obtener todas las historias
  getStories() {
    const url = `${environment.url}stories-all/`;
    return this._http.get(url, { headers: this.headers, observe: 'response' });
  }

  // Obtener Banners General
  getAllBanners() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const url = environment.url + `banners`;

    return this._http.get(url, { headers, observe: 'response' });
  }
}
