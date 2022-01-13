import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-edit-register',
  templateUrl: './edit-register.component.html',
  styleUrls: ['./edit-register.component.scss']
})
export class EditRegisterComponent implements OnInit {
  listCustomer:any = [];
  listCourse:any = [];
  listStatus:any = [];


  userId:string = '';
  userDetails:any = [];
  dataLoaded:boolean = false;

  editUserForm : FormGroup = new FormGroup({});

  constructor(private activatedRoute: ActivatedRoute,
              private userService : UserService,
              private formBuilder : FormBuilder,
              private _snackBar : MatSnackBar,
              private _rount : Router) { }

  ngOnInit(): void {
    this.dataLoaded = false;

    this.userService.listUsers().subscribe(response=>{
      this.listCustomer = response;
      console.log(response);
    });

    this.userService.listCourse().subscribe(response=>{
      this.listCourse = response;
      console.log(response);
    });

    this.userService.listStatus().subscribe(response=>{
      this.listStatus = response;
      console.log(response);
    });

    

    this.activatedRoute.params.subscribe(data =>{
      this.userId = data.id
    });

    if(this.userId !== ' ' ){
      this.userService.viewReg(this.userId)
      .toPromise()
      .then(data=>{
        this.userDetails = data;
        this.userDetails.result[0].reg_end = this.userDetails.result[0].reg_end.slice(0, 10);
        this.userDetails.result[0].reg_start = this.userDetails.result[0].reg_start.slice(0, 10);
        //Object.assign(this.userDetails, data);
        console.log(this.userDetails);
        // console.log(this.userDetails);
        this.editUserForm = this.formBuilder.group({
          // 'class_name' : new FormControl(this.userDetails.result[0].class_name),
          'cus_id' : new FormControl(this.userDetails.result[0].cus_id),
          'course_id' : new FormControl(this.userDetails.result[0].course_id),
          'reg_end' : new FormControl(this.userDetails.result[0].reg_end),
          'reg_start' : new FormControl(this.userDetails.result[0].reg_start),
          'status_id' : new FormControl(this.userDetails.result[0].status_id)
        })

        this.dataLoaded = true;
      })
      .catch(err =>{
        console.log(err);
      })
     
    }
    
    
 
  }

  


  updateUser(){
      console.log(this.editUserForm.value);
      this.userService.updateReg(this.userId,this.editUserForm.value).subscribe(data =>{
        console.log("success");
        console.log(this.editUserForm.value);
        // this._snackBar.open("updated Successfully")
        this._rount.navigate(["/reg/list"]); 
      }, err => {
        console.log(this.editUserForm.value);
        console.log(err);
        // this._snackBar.open("Unable to updated Successfully")
        this._rount.navigate(["/reg/list"]); 
      }
      )

      

  }confirmBox(){  
    Swal.fire({  
      title: 'Are you sure want to Updated?',  
      text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, Updated it!',  
      cancelButtonText: 'No,'  
    }).then((result) => {  
      if (result.value) {  
        this.updateUser();
        Swal.fire(  
          'Updated!',  
          'Your imaginary file has been Updated.',  
          'success'  
        )  
      } else if (result.dismiss === Swal.DismissReason.cancel) {  
        // Swal.fire(  
        //   'Cancelled',  
        //   'Your imaginary file is safe :)',  
        //   'error'  
        // )  
      }  
    })  
  }  

}
