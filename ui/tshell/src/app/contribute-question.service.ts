import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContributeQuestionService {

  url: string= "/tShell/addQuestion";

  constructor(private http: HttpClient) {
    this.http = http;
  }

  addQuestion(json): Observable<any> {
    return this.http.post<any>(this.url, json);
  }
}
