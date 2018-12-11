import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-type': 'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class ContributeQuestionService {

  constructor(private http: HttpClient) { }
  url: string= "/tShell-webservice/contribute/question";

  addQuestion(json): Observable<any> {
    return this.http.post<any>(this.url, json, httpOptions);
  }
}
