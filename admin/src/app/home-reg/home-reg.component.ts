import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

import Swal from 'sweetalert2'; 
import decode from 'jwt-decode';

@Component({
  selector: 'app-home-reg',
  templateUrl: './home-reg.component.html',
  styleUrls: ['./home-reg.component.scss']
})
export class HomeRegComponent implements OnInit {
  listUsers:any = [];

  constructor(private userService: UserService,
   private _rount : Router) { }

  ngOnInit(): void {
    const token:any = localStorage.getItem('token');
    const {userName , roleId , cus_id}:any = decode(token); 
    console.log(cus_id);

    this.userService.viewReg1(cus_id).subscribe(response=>{
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
