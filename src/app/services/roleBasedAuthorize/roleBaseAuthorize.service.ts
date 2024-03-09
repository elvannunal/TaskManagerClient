import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AppConfigService } from "src/app/config/appConfigService";
import { Observable } from 'rxjs';
import { Menu } from "src/app/components/contracts/application-configurations/menu";

@Injectable({
  providedIn: 'root'
})
export class RoleBaseAuthorize {

  constructor(private httpClient: HttpClient, private appConfigService: AppConfigService) { }

  private get apiUrl(): string {
    return this.appConfigService.getApiUrl();
  }
  getAuthorizeDefinationEndPoint(): Observable<Menu[]> {
    return this.httpClient.get<Menu[]>(`${this.apiUrl}/api/Services/GetAuthorize`);
  }

}
