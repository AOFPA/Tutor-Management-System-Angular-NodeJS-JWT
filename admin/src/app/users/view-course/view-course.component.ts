import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-course',
  templateUrl: './view-course.component.html',
  styleUrls: ['./view-course.component.scss']
})
export class ViewCourseComponent implements OnInit {
  userId:string = '';
  listUsers:any = [];

  constructor(private userService: UserService, 
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.userId = data.id
    });

    this.userService.viewCourse(this.userId).subscribe(response=>{
      this.listUsers = response;
      console.log(this.listUsers);
    });
  }

}
