
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Langage } from 'src/app/services/model/langage';
import { environment } from 'src/environments/environment';
import { ComplexFormValue } from './email/complex-form-value.model';

@Injectable({
  providedIn: 'root'
})
export class ComplexFormService {


  private readonly url: string  = environment.backend_url;

  

  constructor(private http: HttpClient) {}
   
 


  addDetails(details: Object): Observable<Object> {
    return this.http.post(`${this.url}/email`, details);
  }

  getLangages(): Observable<Langage> {
    return this.http.get<Langage>(`${this.url}/langage`);
  }

  getAllLang():Observable<Langage[]>{

    return this.http.get<Langage[]>(`${this.url}/langage`);
  }



  





}
