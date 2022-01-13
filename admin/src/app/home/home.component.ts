import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

import Swal from 'sweetalert2'; 
import decode from 'jwt-decode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  

  listCustomer:any = [];
  listCourse:any = [];

  addUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder : FormBuilder,
              private userService: UserService,
              private _snackBar : MatSnackBar,
              private router : Router
              ) { }

  ngOnInit(): void {
    const token:any = localStorage.getItem('token');
    const {username , roleId , cus_id}:any = decode(token); 
    console.log(username);

   

    this.addUserForm = this.formBuilder.group({
      'cus_id' : new FormControl(cus_id),
      'course_id' : new FormControl(''),
      'reg_end' : new FormControl(''),
      'reg_start' : new FormControl('')
      
    });

    this.userService.listUsers().subscribe(response=>{
      this.listCustomer = response;
      console.log(response);
    });

    this.userService.listCourse().subscribe(response=>{
      this.listCourse = response;
      console.log(response);
    });



  
  }
  createUser(){
    console.log(this.addUserForm.value);
    this.userService.addReg(this.addUserForm.value).subscribe(data =>{
      console.log("Crouse Created");
      this.alertWithSuccess()
    }, err => {
      console.log(err);
      this.alertError();
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
