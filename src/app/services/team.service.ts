import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../components/models/user";
import { Observable } from "rxjs";
import { Create_User } from "../components/contracts/user/create_user";
import { Login } from "../components/models/login";
import { TokenResponse } from "../components/contracts/token/tokenResponse";
import { AppConfigService } from "../config/appConfigService";
import { CreateTeam } from '../components/models/creatTeam';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpClient: HttpClient, private appConfigService: AppConfigService) { }

  private get apiUrl(): string {
    return this.appConfigService.getApiUrl();
  }

  createTeam(createTeam: CreateTeam): Observable<CreateTeam> {
    return this.httpClient.post<CreateTeam>(`${this.apiUrl}/addTeam`, createTeam);
  }

  // async hali
  // async createTeam1(createTeam:CreateTeam){
  //   try{
  //     const response = this.httpClient.post(`${this.apiUrl}/addTeam`,createTeam);
  //     return response;
  //   }catch(error){
  //     return error;
  //   }
  // }
  getTeams(){
    return this.httpClient.get(`${this.apiUrl}/getAllTeams`);
  }
  
}
