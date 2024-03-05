import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private apiUrl = 'http://localhost:5122';

  getApiUrl(): string {
    return this.apiUrl;
  }
}
