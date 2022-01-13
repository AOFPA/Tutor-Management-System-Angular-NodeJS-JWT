import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL = 'http://localhost:3000'

  constructor(
    private http : HttpClient,
    private jwtHelper: JwtHelperService,
    private router : Router
    ) { }

  singin(user:any){
    return this.http.post(`${this.URL}/user/singin`,user)
  }

  isAuth():boolean{
    const token:any = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
    return true ;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }
}
