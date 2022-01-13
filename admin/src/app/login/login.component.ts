import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

import Swal from 'sweetalert2';  

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user = {
    userName : '',
    pass : ''
  }

  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    console.log(this.user);
    this.authService.singin(this.user).subscribe((res:any) => {  
      console.log(res);
      localStorage.setItem('token',res.token);
      this.router.navigate(['cus/list']);
    },err => {
      console.log('awdawdawd');
    }
      
    )
  }

  alertWithSuccess(){  
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')  
  }  

  alertError(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
    })
  }


}
