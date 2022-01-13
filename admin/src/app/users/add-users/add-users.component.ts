import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

import Swal from 'sweetalert2';  

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.scss']
})
export class AddUsersComponent implements OnInit {
  addUserForm: FormGroup = new FormGroup({});
  listPrefix:any = [];

  constructor(private formBuilder : FormBuilder,
              private userService: UserService,
              private _snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'cus_fname' : new FormControl('',),
      'cus_lname' : new FormControl(''),
      'prefix_id' : new FormControl(''),
      'cus_nname' : new FormControl(''),
      'cass_id' : new FormControl(''),
      'school_id' : new FormControl(''),
      'cus_tel' : new FormControl('')
    })

    this.userService.listPrefix().subscribe(response=>{
      this.listPrefix = response;
      console.log(response);
    });
  }
  createUser(){
    console.log(this.addUserForm.value);
    this.userService.addUser(this.addUserForm.value).subscribe(data =>{
      console.log("user Created");
      this._snackBar.open("Created Successfully")
    }, err => {
      console.log(err);
      this._snackBar.open("Unable to Created Successfully")
    }
    )
  }

  alertWithSuccess(){  
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')  
  }  

}
