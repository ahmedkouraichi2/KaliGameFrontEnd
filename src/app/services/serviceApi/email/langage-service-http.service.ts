import { Injectable } from '@angular/core';
import { Langage } from '../../model/langage';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Question } from '../../model/question';


const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})



  export class LangageServiceHttpService {
    private readonly url: string;
    constructor(private httpClient: HttpClient) {
      this.url = environment.apiUrl;
    }

    getNumberDomaine(){
      return this.httpClient.get(`${this.url}/langage/allLangageNumber`);
    }

    getDomaineParId(id:number){
      return this.httpClient.get(`${this.url}/langage/get/${id}`)
    }


    addDomaine(langage: Langage): Observable<Object> {
      return this.httpClient.post(`${this.url}/langage`, langage);
    }

    deleteDomaine(id: number): Observable<Boolean> {
      console.log('service');
      return this.httpClient.delete<Boolean>(`${this.url}/langage/${id}`);
    }

    editDomaine(langage: Langage): Observable<Object> {
      return this.httpClient.put(`${this.url}/langage`, langage);
    }

    getQuestions(id:any): Observable<Question[]> {
      return this.httpClient.get<Question[]>(`${this.url}/quest/${id}`);
    }

    addQuestion(question: Question): Observable<Question> {
      console.log(question);
      return this.httpClient.post<Question>(`${this.url}/quest/${question.langage.id}`, question,httpOptions);
    }

    deleteQuestion(id: number): Observable<Boolean> {
      console.log('service');
      return this.httpClient.delete<Boolean>(`${this.url}/quest/${id}`);
    }
    updateQuestion(question: Question): Observable<Question> {
      console.log(question.langage.id);
      return this.httpClient.put<Question>(`${this.url}/quest/${question.langage.id}`, question);
    }
}
