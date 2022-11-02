import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Langage } from '../../model/langage';

@Injectable({
  providedIn: 'root'
})
export class DomainHttpService {



  private readonly url: string;
  surl =" http://localhost:8081/api/langage/get";
  id: number;

 
  constructor(private httpClient: HttpClient) {
    this.url = environment.apiUrl;
  }




  getLangages(): Observable<Langage[]> {
    return this.httpClient.get<Langage[]>(`${this.url}/langage`);
  }


  getLangageById(id:number):Observable<Langage>{
    let urlLang=`${this.url}/get/${id}`
    return this.httpClient.get<Langage>(urlLang);
  }
}
