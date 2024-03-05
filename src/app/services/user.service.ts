import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../components/models/user";
import { Observable } from "rxjs";
import { Create_User } from "../components/contracts/user/create_user";
import { Login } from "../components/models/login";
import { TokenResponse } from "../components/contracts/token/tokenResponse";
import { AppConfigService } from "../config/appConfigService";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private appConfigService: AppConfigService) { }

  private get apiUrl(): string {
    return this.appConfigService.getApiUrl();
  }

  createUser(user: User): Observable<Create_User | User> {
    return this.httpClient.post<Create_User | User>(`${this.apiUrl}/createUser`, user);
  }

  passwordUpdate(userId: string, resetToken: string, password: string, passwordConfirm: string): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/update-password`, { userId: userId, resetToken: resetToken, password: password, passwordConfirm: passwordConfirm });
  }
}
