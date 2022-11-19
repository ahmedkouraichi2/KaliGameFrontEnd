import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionHttpService {

  private readonly url: string;
  constructor(private http: HttpClient) {
    this.url = environment.backend_url;

}
}
