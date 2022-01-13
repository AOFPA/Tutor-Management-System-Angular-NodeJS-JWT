import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {

  addUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder : FormBuilder,
              private userService: UserService,
              private _snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'class_name' : new FormControl('')
    })
  }
  createUser(){
    console.log(this.addUserForm.value);
    this.userService.addClass(this.addUserForm.value).subscribe(data =>{
      console.log("class Created");
      this.alertWithSuccess()
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
