import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

import Swal from 'sweetalert2';  

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.scss']
})
export class AddSchoolComponent implements OnInit {
  addUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder : FormBuilder,
              private userService: UserService,
              private _snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'school_name' : new FormControl('')
    })
  }
  createUser(){
    console.log(this.addUserForm.value);
    this.userService.addSchool(this.addUserForm.value).subscribe(data =>{
      console.log("school Created");
      this.alertWithSuccess();
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
