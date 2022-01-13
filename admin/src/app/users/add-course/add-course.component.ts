import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';

import Swal from 'sweetalert2';  

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  listCate:any = [];
  listClass:any = [];
  listSubject:any = [];
  listSystem:any = [];

  addUserForm: FormGroup = new FormGroup({});

  constructor(private formBuilder : FormBuilder,
              private userService: UserService,
              private _snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.addUserForm = this.formBuilder.group({
      'cate_id' : new FormControl(''),
      'subject_id' : new FormControl(''),
      'system_id' : new FormControl(''),
      'class_id' : new FormControl(''),
      'course_price' : new FormControl(''),
      'course_total' : new FormControl(''),
      'course_bookprice' : new FormControl('')
    });

    this.userService.listCate().subscribe(response=>{
      this.listCate = response;
      console.log(response);
    });

    this.userService.listClass().subscribe(response=>{
      this.listClass = response;
      console.log(response);
    });

    this.userService.listSub().subscribe(response=>{
      this.listSubject = response;
      console.log(response);
    });

    this.userService.listSystem().subscribe(response=>{
      this.listSystem = response;
      console.log(response);
    });
  }
  createUser(){
    console.log(this.addUserForm.value);
    this.userService.addCourse(this.addUserForm.value).subscribe(data =>{
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
