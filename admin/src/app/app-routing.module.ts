import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { HomeRegComponent } from './home-reg/home-reg.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddCateComponent } from './users/add-cate/add-cate.component';
import { AddClassComponent } from './users/add-class/add-class.component';
import { AddCourseComponent } from './users/add-course/add-course.component';
import { AddPrefixComponent } from './users/add-prefix/add-prefix.component';
import { AddRegisterComponent } from './users/add-register/add-register.component';
import { AddSchoolComponent } from './users/add-school/add-school.component';
import { AddStatusComponent } from './users/add-status/add-status.component';
import { AddSubjectComponent } from './users/add-subject/add-subject.component';
import { AddSystemComponent } from './users/add-system/add-system.component';

import { AddUsersComponent } from './users/add-users/add-users.component';
import { DeleteCateComponent } from './users/delete-cate/delete-cate.component';
import { DeleteClassComponent } from './users/delete-class/delete-class.component';
import { DeleteCourseComponent } from './users/delete-course/delete-course.component';
import { DeletePrefixComponent } from './users/delete-prefix/delete-prefix.component';
import { DeleteRegisterComponent } from './users/delete-register/delete-register.component';
import { DeleteSchoolComponent } from './users/delete-school/delete-school.component';
import { DeleteStatusComponent } from './users/delete-status/delete-status.component';
import { DeleteSubjectComponent } from './users/delete-subject/delete-subject.component';
import { DeleteSystemComponent } from './users/delete-system/delete-system.component';
import { DeleteUsersComponent } from './users/delete-users/delete-users.component';
import { EditCateComponent } from './users/edit-cate/edit-cate.component';
import { EditClassComponent } from './users/edit-class/edit-class.component';
import { EditCourseComponent } from './users/edit-course/edit-course.component';
import { EditPrefixComponent } from './users/edit-prefix/edit-prefix.component';
import { EditRegisterComponent } from './users/edit-register/edit-register.component';
import { EditSchoolComponent } from './users/edit-school/edit-school.component';
import { EditStatusComponent } from './users/edit-status/edit-status.component';
import { EditSubjectComponent } from './users/edit-subject/edit-subject.component';
import { EditSystemComponent } from './users/edit-system/edit-system.component';
import { EditUsersComponent } from './users/edit-users/edit-users.component';
import { ListCateComponent } from './users/list-cate/list-cate.component';
import { ListClassComponent } from './users/list-class/list-class.component';
import { ListCourseComponent } from './users/list-course/list-course.component';
import { ListPrefixComponent } from './users/list-prefix/list-prefix.component';
import { ListRegisterComponent } from './users/list-register/list-register.component';
import { ListSchoolComponent } from './users/list-school/list-school.component';
import { ListStatusComponent } from './users/list-status/list-status.component';
import { ListSubjectComponent } from './users/list-subject/list-subject.component';
import { ListSystemComponent } from './users/list-system/list-system.component';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ViewCourseComponent } from './users/view-course/view-course.component';
import { ViewRegisterComponent } from './users/view-register/view-register.component';
import { ViewUsersComponent } from './users/view-users/view-users.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'admin', redirectTo: 'cus/list', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'home', component: HomeComponent ,canActivate : [AuthGuard]},
  { path: 'home-reg', component: HomeRegComponent ,canActivate : [AuthGuard]},
  //  { path: '', redirectTo:'/login',pathMatch : 'full'},
  { path : 'cus', canActivate: [RoleGuard] , data : { expectedRole : 'admin'},
    children : [
      { path: 'list', component: ListUsersComponent },
      { path: 'delete/:id', component: DeleteUsersComponent},
      { path: 'edit/:id', component: EditUsersComponent},
      { path: 'view/:id', component: ViewUsersComponent},
      { path: 'create', component: AddUsersComponent},
    ]},
    { path : 'subject',  canActivate: [RoleGuard] , data : { expectedRole : 'admin'},
    children : [
      { path: 'list', component: ListSubjectComponent},
      { path: 'delete/:id', component: DeleteSubjectComponent},
      { path: 'edit/:id', component: EditSubjectComponent},
      { path: 'create', component: AddSubjectComponent},
    ]},
    { path : 'cate', canActivate: [RoleGuard] , data : { expectedRole : 'admin'},
    children : [
      { path: 'list', component: ListCateComponent},
      { path: 'delete/:id', component: DeleteCateComponent},
      { path: 'edit/:id', component: EditCateComponent},
      { path: 'create', component: AddCateComponent},
    ]},
    { path : 'system',  canActivate: [RoleGuard] , data : { expectedRole : 'admin'},
    children : [
      { path: 'list', component: ListSystemComponent},
      { path: 'delete/:id', component: DeleteSystemComponent},
      { path: 'edit/:id', component: EditSystemComponent},
      { path: 'create', component: AddSystemComponent},
    ]},
    { path : 'school',  canActivate: [RoleGuard] , data : { expectedRole : 'admin'},
    children : [
      { path: 'list', component: ListSchoolComponent},
      { path: 'delete/:id', component: DeleteSchoolComponent},
      { path: 'edit/:id', component: EditSchoolComponent},
      { path: 'create', component: AddSchoolComponent},
    ]},
    { path : 'class',  canActivate: [RoleGuard] , data : { expectedRole : 'admin'},
    children : [
      { path: 'list', component: ListClassComponent},
      { path: 'delete/:id', component: DeleteClassComponent},
      { path: 'edit/:id', component: EditClassComponent},
      { path: 'create', component: AddClassComponent},
    ]},
    { path : 'status',  canActivate: [RoleGuard] , data : { expectedRole : 'admin'},
    children : [
      { path: 'list', component: ListStatusComponent},
      { path: 'delete/:id', component: DeleteStatusComponent},
      { path: 'edit/:id', component: EditStatusComponent},
      { path: 'create', component: AddStatusComponent},
    ]},
    { path : 'prefix',  canActivate: [RoleGuard] , data : { expectedRole : 'admin'},
    children : [
      { path: 'list', component: ListPrefixComponent},
      { path: 'delete/:id', component: DeletePrefixComponent},
      { path: 'edit/:id', component: EditPrefixComponent},
      { path: 'create', component: AddPrefixComponent},
    ]},
    { path : 'course',  canActivate: [RoleGuard] , data : { expectedRole : 'admin'},
    children : [
      { path: 'list', component: ListCourseComponent},
      { path: 'delete/:id', component: DeleteCourseComponent},
      { path: 'edit/:id', component: EditCourseComponent},
      { path: 'view/:id', component: ViewCourseComponent},
      { path: 'create', component: AddCourseComponent},
    ]},
    { path : 'reg', canActivate: [RoleGuard] , data : { expectedRole : 'admin'},
    children : [
      { path: 'list', component: ListRegisterComponent },
      { path: 'delete/:id', component: DeleteRegisterComponent},
      { path: 'edit/:id', component: EditRegisterComponent},
      { path: 'view/:id', component: ViewRegisterComponent},
      { path: 'create', component: AddRegisterComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
