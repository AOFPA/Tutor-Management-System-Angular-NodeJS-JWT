import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-add-register',
  templateUrl: './add-register.component.html',
  styleUrls: ['./add-register.component.scss']
})
export class AddRegisterComponent implements OnInit {
  listCustomer:any = [];
  listCourse:any = [];

  addUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder : FormBuilder,
              private userService: UserService,
              private _snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'cus_id' : new FormControl(''),
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
