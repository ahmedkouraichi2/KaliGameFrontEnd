import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Processor} from "../../model/Processor";
import {Type} from "../../model/Type";

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};
@Injectable({
  providedIn: 'root'
})
export class ProcessorServiceService {
  apiURL: string = 'http://localhost:8081/Collecteur';
  processor:Processor[];
  constructor(private http : HttpClient) {
  }
  listProcessor():Observable<Processor[]>{
    return this.http.get<Processor[]>(this.apiURL+"/all")
  }
  ajouterProcessor(proc:Processor):Observable<Processor>{
    return this.http.post<Processor>(this.apiURL+"/add", proc,httpOptions);
  }
  supprimerProcessor(id:number){
    const url=`${this.apiURL}/delete/${id}`;
    return this.http.delete(url,httpOptions);
  }
  consulterProcessor(id:number):Observable<Processor>{
    const url=`${this.apiURL}/${id}`;
    return this.http.get<Processor>(url);
  }
  updateProcessor(processor:Processor ,id:number):Observable<Processor>{
    return this.http.put<Processor>(this.apiURL+`/update/${id}`,processor,httpOptions);
  }
  countProcessorType(type: string):Observable<number>{
    const url=`${this.apiURL}/type/${type}`;
    return this.http.get<number>(url);
  }
  countProcessorStatus(status:string):Observable<number>{
    const url=`${this.apiURL}/status/${status}`;
    return this.http.get<number>(url);
  }

  countProcessor():Observable<number>{
    return this.http.get<number>(this.apiURL);
  }


}

