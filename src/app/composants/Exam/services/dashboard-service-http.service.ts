import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/services/model/question';
import { Result } from 'src/app/services/model/Result';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceHttpService {

  id: number;
  private readonly url: string;
  correct!: number;
  incorrect!: number;
  constructor(private httpClient: HttpClient) {
    this.url = environment.apiUrl;
  }

  getQuestions(id: number): Observable<Question> {
    return this.httpClient.get<Question>(`${this.url}/dash/${this.id}`);
  }

  getDateExpiration(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.url}/test/${this.id}`);
  }

  setResult(id: number, result: Result): Observable<Result> {
    return this.httpClient.post<Result>(`${this.url}/result/${this.id}`, result);
  }

  getId(): number {
    return this.id;
  }
  setId(id: number) {
    this.id = id;
  }
}
