import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.scss']
})
export class EditCourseComponent implements OnInit {
  listCate:any = [];
  listClass:any = [];
  listSubject:any = [];
  listSystem:any = [];

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

    this.activatedRoute.params.subscribe(data =>{
      this.userId = data.id
    });

    if(this.userId !== ' ' ){
      this.userService.viewCourse(this.userId)
      .toPromise()
      .then(data=>{
        this.userDetails = data;
        //Object.assign(this.userDetails, data);
        console.log(this.userDetails);
        // console.log(this.userDetails);
        this.editUserForm = this.formBuilder.group({
          // 'class_name' : new FormControl(this.userDetails.result[0].class_name),
          'cate_id' : new FormControl(''),
          'subject_id' : new FormControl(''),
          'system_id' : new FormControl(''),
          'class_id' : new FormControl(''),
          'course_price' : new FormControl(this.userDetails.result[0].course_price),
          'course_total' : new FormControl(this.userDetails.result[0].course_total),
          'course_bookprice' : new FormControl(this.userDetails.result[0].course_bookprice)
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
      this.userService.updateCourse(this.userId,this.editUserForm.value).subscribe(data =>{
        console.log("success");
        console.log(this.editUserForm.value);
        // this._snackBar.open("updated Successfully")
        this._rount.navigate(["/course/list"]); 
      }, err => {
        console.log(this.editUserForm.value);
        console.log(err);
        // this._snackBar.open("Unable to updated Successfully")
        this._rount.navigate(["/course/list"]); 
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
