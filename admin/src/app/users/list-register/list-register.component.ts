import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';  

@Component({
  selector: 'app-list-register',
  templateUrl: './list-register.component.html',
  styleUrls: ['./list-register.component.scss']
})
export class ListRegisterComponent implements OnInit {
  listUsers:any = [];

  constructor(private userService: UserService,
   private _rount : Router) { }

  ngOnInit(): void {
    this.userService.listReg().subscribe(response=>{
      this.listUsers = response;
      console.log(response);
    });
    
  }

  confirmBox(id:string){  
    Swal.fire({  
      title: 'Are you sure want to remove?',  
      text: 'You will not be able to recover this file!',  
      icon: 'warning',  
      showCancelButton: true,  
      confirmButtonText: 'Yes, delete it!',  
      cancelButtonText: 'No, keep it'  
    }).then((result) => {  
      if (result.value) {  
        this._rount.navigate(["/reg/delete/" + id]); 
        Swal.fire(  
          'Deleted!',  
          'Your imaginary file has been deleted.',  
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
