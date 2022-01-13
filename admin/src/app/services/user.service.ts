import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'http://localhost:5000/api/';
  constructor(private http: HttpClient) { }

  listUsers(){
    return this.http.get<any[]>(this.baseUrl + 'cus');
  }

  viewUser(id:string){
    return this.http.get(this.baseUrl + 'cus/view/'+ id);
  }

  addUser(userObj: any){
    return this.http.post(this.baseUrl + 'cus/add',userObj);
  }

  deleteUser(id: string){
    return this.http.delete(this.baseUrl + 'cus/delete/'+ id)
  }

  viewUser1(id:string){
    return this.http.get(this.baseUrl + 'cus/view-edit/'+ id);
  }

  updateUser(id:string, userObj:any){
    return this.http.put(this.baseUrl + 'cus/update/'+ id , userObj);
  }

  //subject
  listSub(){
    return this.http.get<any[]>(this.baseUrl + 'subject');
  }

  addSub(userObj: any){
    return this.http.post(this.baseUrl + 'subject/add',userObj);
  }

  deleteSub(id: string){
    return this.http.delete(this.baseUrl + 'subject/delete/'+ id)
  }

  updateSub(id:string, userObj:any){
    return this.http.put(this.baseUrl + 'subject/update/'+ id , userObj);
  }

  viewSub1(id:string){
    return this.http.get(this.baseUrl + 'subject/read/'+ id);
  }


  //cate
  listCate(){
    return this.http.get<any[]>(this.baseUrl + 'cate');
  }

  addCate(userObj: any){
    return this.http.post(this.baseUrl + 'cate/add',userObj);
  }

  deleteCate(id: string){
    return this.http.delete(this.baseUrl + 'cate/delete/'+ id)
  }

  updateCate(id:string, userObj:any){
    return this.http.put(this.baseUrl + 'cate/update/'+ id , userObj);
  }

  viewCate1(id:string){
    return this.http.get(this.baseUrl + 'cate/read/'+ id);
  }
  
  //System
  listSystem(){
    return this.http.get<any[]>(this.baseUrl + 'system');
  }

  addSystem(userObj: any){
    return this.http.post(this.baseUrl + 'system/add',userObj);
  }

  deleteSystem(id: string){
    return this.http.delete(this.baseUrl + 'system/delete/'+ id)
  }

  updateSystem(id:string, userObj:any){
    return this.http.put(this.baseUrl + 'system/update/'+ id , userObj);
  }

  viewSystem1(id:string){
    return this.http.get(this.baseUrl + 'system/read/'+ id);
  }

   //School
   listSchool(){
    return this.http.get<any[]>(this.baseUrl + 'school');
  }

  addSchool(userObj: any){
    return this.http.post(this.baseUrl + 'school/add',userObj);
  }

  deleteSchool(id: string){
    return this.http.delete(this.baseUrl + 'school/delete/'+ id)
  }

  updateSchool(id:string, userObj:any){
    return this.http.put(this.baseUrl + 'school/update/'+ id , userObj);
  }

  viewSchool1(id:string){
    return this.http.get(this.baseUrl + 'school/read/'+ id);
  }


   //class
   listClass(){
    return this.http.get<any[]>(this.baseUrl + 'class');
  }

  addClass(userObj: any){
    return this.http.post(this.baseUrl + 'class/add',userObj);
  }

  deleteClass(id: string){
    return this.http.delete(this.baseUrl + 'class/delete/'+ id)
  }

  updateClass(id:string, userObj:any){
    return this.http.put(this.baseUrl + 'class/update/'+ id , userObj);
  }

  viewClass(id:string){
    return this.http.get(this.baseUrl + 'class/read/'+ id);
  }

  //Status
  listStatus(){
    return this.http.get<any[]>(this.baseUrl + 'status');
  }

  addStatus(userObj: any){
    return this.http.post(this.baseUrl + 'status/add',userObj);
  }

  deleteStatus(id: string){
    return this.http.delete(this.baseUrl + 'status/delete/'+ id)
  }

  updateStatus(id:string, userObj:any){
    return this.http.put(this.baseUrl + 'status/update/'+ id , userObj);
  }

  viewStatus(id:string){
    return this.http.get(this.baseUrl + 'status/read/'+ id);
  }

  //Prefix
  listPrefix(){
    return this.http.get<any[]>(this.baseUrl + 'prefix');
  }

  addPrefix(userObj: any){
    return this.http.post(this.baseUrl + 'prefix/add',userObj);
  }

  deletePrefix(id: string){
    return this.http.delete(this.baseUrl + 'prefix/delete/'+ id)
  }

  updatePrefix(id:string, userObj:any){
    return this.http.put(this.baseUrl + 'prefix/update/'+ id , userObj);
  }

  viewPrefix(id:string){
    return this.http.get(this.baseUrl + 'prefix/read/'+ id);
  }

  //Course
  listCourse(){
    return this.http.get<any[]>(this.baseUrl + 'course');
  }

  viewCourse(id:string){
    return this.http.get(this.baseUrl + 'course/view/'+ id);
  }

  addCourse(userObj: any){
    return this.http.post(this.baseUrl + 'course/add',userObj);
  }

  deleteCourse(id: string){
    return this.http.delete(this.baseUrl + 'course/delete/'+ id)
  }

  viewCourse1(id:string){
    return this.http.get(this.baseUrl + 'course/view-edit/'+ id);
  }

  updateCourse(id:string, userObj:any){
    return this.http.put(this.baseUrl + 'course/update/'+ id , userObj);
  }


  //Register
  listReg(){
    return this.http.get<any[]>(this.baseUrl + 'register');
  }

  addReg(userObj: any){
    return this.http.post(this.baseUrl + 'register/add',userObj);
  }

  deleteReg(id: string){
    return this.http.delete(this.baseUrl + 'register/delete/'+ id)
  }

  updateReg(id:string, userObj:any){
    return this.http.put(this.baseUrl + 'register/update/'+ id , userObj);
  }

  viewReg(id:string){
    return this.http.get(this.baseUrl + 'register/view/'+ id);
  }

  viewReg1(id:string){
    return this.http.get(this.baseUrl + 'register/read/'+ id);
  }

  
  
}
