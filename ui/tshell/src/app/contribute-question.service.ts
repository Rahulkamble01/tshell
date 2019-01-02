import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContributeQuestionService {
  uploadUrl: string = '/tShell/question/upload';
  addQuestionUrl: string= "/tShell/";

  constructor(private http: HttpClient) {
    this.http = http;
  }
  uploadQuestions(formData: any): Observable<any> {
    return this.http.post(this.uploadUrl, formData);
  }
  addQuestion(json: any): Observable<any> {
    return this.http.post<any>(this.addQuestionUrl, json);
  }
}
