import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-delete-cate',
  templateUrl: './delete-cate.component.html',
  styleUrls: ['./delete-cate.component.scss']
})
export class DeleteCateComponent implements OnInit {
 
  userId : string = '';

  constructor(private activatedRoute : ActivatedRoute,
              private userService : UserService,
              private _snackBar : MatSnackBar,
              private _rount : Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId = data.id;
    });
    if(this.userId){
      this.userService.deleteCate(this.userId).subscribe(data => {
        console.log(data);
        this._rount.navigate(["/cate/list"]); 
        // this._snackBar.open("Deleted Successfully")
      },err =>{
        console.log(err);
        // this._snackBar.open("Unable to Deleted Successfully")  
        this._rount.navigate(["/cate/list"]); 
      })
    }
  }

}
