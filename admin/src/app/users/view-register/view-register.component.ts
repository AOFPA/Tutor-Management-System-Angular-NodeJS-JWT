import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-register',
  templateUrl: './view-register.component.html',
  styleUrls: ['./view-register.component.scss']
})
export class ViewRegisterComponent implements OnInit {
  userId:string = '';
  listUsers:any = [];

  constructor(private userService: UserService, 
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId = data.id
    });

    this.userService.viewReg(this.userId).subscribe(response=>{
      this.listUsers = response;
      this.listUsers.result[0].reg_end = this.listUsers.result[0].reg_end.slice(0, 10);
      this.listUsers.result[0].reg_start = this.listUsers.result[0].reg_start.slice(0, 10);
      this.listUsers.result[0].reg_time = this.listUsers.result[0].reg_time.slice(0, 10);
      console.log(this.listUsers);
    });
  }

}
