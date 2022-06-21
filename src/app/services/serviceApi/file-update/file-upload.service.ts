import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  apiUrl:string ='http://localhost:8081';
  constructor( private http:HttpClient) { }

  upload(file:File,id:string):Observable<HttpEvent<any>>{
    const formData=new FormData();
    formData.append('file',file);
    const req = new HttpRequest('POST', `${this.apiUrl}/upload/${id}`, formData, {
      reportProgress: true,
      responseType: 'json'
    });
    return this.http.request(req);
  }
 /* getFiles(): Observable<any> {
    return this.http.get(`${this.apiUrl}/files`);
  }*/
  uploadImage(id:string):Observable<any>{
    const url=`${this.apiUrl}/user/file/${id}`;
    return this.http.get<any>(url);
  }
  getUserFile(id:string): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/file/${id}`, { responseType: 'blob' });
  }
}
