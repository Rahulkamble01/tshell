import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})
export class ContributeQuestionService {
  csvData: any;
  uploadUrl: string = '/tShell/question/upload';
  addQuestionUrl: string = '/tShell/question/';
  submitQuestionsUrl: string = '/tShell/question/submitforreview';

  constructor(private http: HttpClient) {
    this.http = http;
  }
  uploadQuestions(formData: any): Observable<any> {
    return this.http.post<any>(this.uploadUrl, formData);
  }
  addQuestion(json: any): Observable<any> {
    return this.http.post<any>(this.addQuestionUrl, json);
  }
  submitForReview(questionsList): Observable<any> {
    console.log('submitForReview() is called!');
    console.log(this.submitQuestionsUrl);
    return this.http.post<any>(this.submitQuestionsUrl, questionsList, httpOptions);
  }
  getCsvData() {
    return this.csvData;
  }
  setCsvData(csvData: any) {
    this.csvData = csvData;
  }
}
