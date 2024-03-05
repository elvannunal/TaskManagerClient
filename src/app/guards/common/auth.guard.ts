import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { _isAuthenticated } from 'src/app/services/common/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  
  constructor(private jwtHelper: JwtHelperService,private router:Router) { }
  
  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot) 
    {
      if(!_isAuthenticated){
        this.router.navigate(["Login"],{queryParams:{returnUrl:state.url}})
      }
      
    return true;
  }

}
