import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { DeleteUsersComponent } from './delete-users/delete-users.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY} from '@angular/material/snack-bar';
import { LayoutModule } from '../layout/layout.module';
import { AddSubjectComponent } from './add-subject/add-subject.component';
import { DeleteSubjectComponent } from './delete-subject/delete-subject.component';
import { EditSubjectComponent } from './edit-subject/edit-subject.component';
import { ListSubjectComponent } from './list-subject/list-subject.component';
import { ListCateComponent } from './list-cate/list-cate.component';
import { EditCateComponent } from './edit-cate/edit-cate.component';
import { AddCateComponent } from './add-cate/add-cate.component';
import { DeleteCateComponent } from './delete-cate/delete-cate.component';
import { ListSystemComponent } from './list-system/list-system.component';
import { AddSystemComponent } from './add-system/add-system.component';
import { EditSystemComponent } from './edit-system/edit-system.component';
import { DeleteSystemComponent } from './delete-system/delete-system.component';
import { DeleteSchoolComponent } from './delete-school/delete-school.component';
import { AddSchoolComponent } from './add-school/add-school.component';
import { EditSchoolComponent } from './edit-school/edit-school.component';
import { ListSchoolComponent } from './list-school/list-school.component';
import { ListClassComponent } from './list-class/list-class.component';
import { AddClassComponent } from './add-class/add-class.component';
import { EditClassComponent } from './edit-class/edit-class.component';
import { DeleteClassComponent } from './delete-class/delete-class.component';
import { DeleteStatusComponent } from './delete-status/delete-status.component';
import { ListStatusComponent } from './list-status/list-status.component';
import { AddStatusComponent } from './add-status/add-status.component';
import { EditStatusComponent } from './edit-status/edit-status.component';
import { EditPrefixComponent } from './edit-prefix/edit-prefix.component';
import { DeletePrefixComponent } from './delete-prefix/delete-prefix.component';
import { AddPrefixComponent } from './add-prefix/add-prefix.component';
import { ListPrefixComponent } from './list-prefix/list-prefix.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { DeleteCourseComponent } from './delete-course/delete-course.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { AddRegisterComponent } from './add-register/add-register.component';
import { EditRegisterComponent } from './edit-register/edit-register.component';
import { ListRegisterComponent } from './list-register/list-register.component';
import { DeleteRegisterComponent } from './delete-register/delete-register.component';
import { ViewRegisterComponent } from './view-register/view-register.component';



@NgModule({
  declarations: [
    ListUsersComponent,
    AddUsersComponent,
    EditUsersComponent,
    DeleteUsersComponent,
    ViewUsersComponent,
    AddSubjectComponent,
    DeleteSubjectComponent,
    EditSubjectComponent,
    ListSubjectComponent,
    ListCateComponent,
    EditCateComponent,
    AddCateComponent,
    DeleteCateComponent,
    ListSystemComponent,
    AddSystemComponent,
    EditSystemComponent,
    DeleteSystemComponent,
    DeleteSchoolComponent,
    AddSchoolComponent,
    EditSchoolComponent,
    ListSchoolComponent,
    ListClassComponent,
    AddClassComponent,
    EditClassComponent,
    DeleteClassComponent,
    DeleteStatusComponent,
    ListStatusComponent,
    AddStatusComponent,
    EditStatusComponent,
    EditPrefixComponent,
    DeletePrefixComponent,
    AddPrefixComponent,
    ListPrefixComponent,
    ListCourseComponent,
    AddCourseComponent,
    EditCourseComponent,
    DeleteCourseComponent,
    ViewCourseComponent,
    AddRegisterComponent,
    EditRegisterComponent,
    ListRegisterComponent,
    DeleteRegisterComponent,
    ViewRegisterComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    RouterModule,
    LayoutModule
  ],
  providers : [
    { provide : MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration : 2500}},
  ]
})
export class UsersModule { }
