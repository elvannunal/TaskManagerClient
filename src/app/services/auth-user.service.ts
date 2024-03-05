import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, firstValueFrom, map } from 'rxjs';
import { TokenResponse } from '../components/contracts/token/tokenResponse';
import { Login } from '../components/models/login';
import { AppConfigService } from '../config/appConfigService';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {
  constructor(private httpClient: HttpClient, private appConfigService: AppConfigService) { }

  private get apiUrl(): string {
    return this.appConfigService.getApiUrl();
  }

  login(login: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/login`, login);
  }

  setToken(tokenResponse: TokenResponse): void {
    if (tokenResponse && tokenResponse.token && tokenResponse.token.accessToken) {
      localStorage.setItem("accessToken", tokenResponse.token.accessToken);
    } else {
      console.error("Invalid token response:", tokenResponse);
    }
  }

  passwordReset(email: string): Observable<any> {
    const data = { email: email };
    return this.httpClient.post<any>(`${this.apiUrl}/password-reset`, data);
  }

  verifyResetToken(resetToken: string, userId: string): Observable<any> {
   
    const data = {
      resetToken: resetToken,
      userId: userId
    };
    return this.httpClient.post<boolean>(`${this.apiUrl}/password-verify`, data).pipe(
      map(response=> {
        return response;
      })
    );
  }



}
