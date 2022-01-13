import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

import decode from 'jwt-decode';

@Component({
  selector: 'app-header-test',
  templateUrl: './header-test.component.html',
  styleUrls: ['./header-test.component.scss']
})
export class HeaderTestComponent implements OnInit {
  listUsers:any = [];
  constructor(
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    const token:any = localStorage.getItem('token');
    const {username , roleId , cus_id}:any = decode(token); 
    console.log(cus_id);
    this.listUsers = username;
  }

  logout() {
    this.authService.doLogout()
  }

}
