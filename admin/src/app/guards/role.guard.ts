import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
 
  constructor(
    private authService : AuthService,
    private router : Router
  ){}
  
  canActivate(route : ActivatedRouteSnapshot):boolean{
    const expectedRole = route.data.expectedRole;
    const token:any = localStorage.getItem('token');
    const {userName , roleId , cus_id}:any = decode(token); 
    console.log(cus_id);

    if(!this.authService.isAuth || roleId !== expectedRole){
      console.log('User no autherization to visit');
      this.router.navigate(['home']);
      return false ;
    }

    return true;
  }
  
  
}
