import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private isWindowRefreshed: boolean = false;

  get windowRefreshed(): boolean {
    return this.isWindowRefreshed;
  }

  set windowRefreshed(value: boolean) {
    this.isWindowRefreshed = value;
  }
}
