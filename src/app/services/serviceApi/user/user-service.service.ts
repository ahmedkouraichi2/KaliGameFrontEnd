import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../model/User";
import {Observable} from "rxjs";
const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  apiUrl:string ='http://localhost:8081/users';
  user:User[];
  constructor( private  http:HttpClient) {

  }

  listUser():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }
  ajouterUser(user:User):Observable<User>{
    return this.http.post<User>(this.apiUrl+"/add", user, httpOptions);
  }
  consulterUser(id:number):Observable<User>{
    const url=`${this.apiUrl}/${id}`
    return this.http.get<User>(url);
  }
 supprimerUser(id:string):Observable<User>{
    const url=`${this.apiUrl}/${id}`
    return this.http.delete<User>(url);
  }
  updateUser(user:User):Observable<User>{
    return  this.http.put<User>(this.apiUrl,user,httpOptions)
  }
}
