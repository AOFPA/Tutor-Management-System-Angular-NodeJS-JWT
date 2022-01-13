import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

import Swal from 'sweetalert2';  

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  addUserForm: FormGroup = new FormGroup({});
  
  listPrefix:any = [];
  listClass:any = [];
  listSchool:any = [];
  constructor(private userService: UserService,
    private formBuilder : FormBuilder,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'cus_fname' : new FormControl('',),
      'cus_lname' : new FormControl(''),
      'prefix_id' : new FormControl(''),
      'cus_nname' : new FormControl(''),
      'cass_id' : new FormControl(''),
      'school_id' : new FormControl(''),
      'cus_tel' : new FormControl(''),
      'username' : new FormControl(''),
      'userpass' : new FormControl('')
    })


    this.userService.listPrefix().subscribe(response=>{
      this.listPrefix = response;
      console.log(response);
    });

    this.userService.listClass().subscribe(response=>{
      this.listClass = response;
      console.log(response);
    });

    this.userService.listSchool().subscribe(response=>{
      this.listSchool = response;
      console.log(response);
    });
    
  }

  createUser(){
    console.log(this.addUserForm.value);
    this.userService.addUser(this.addUserForm.value).subscribe(data =>{
      console.log("user Created");
      this.alertWithSuccess();
      this.router.navigate(['login']);
      // this._snackBar.open("Created Successfully")
    }, err => {
      this.alertError()
      console.log(err);
      // this._snackBar.open("Unable to Created Successfully")
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
