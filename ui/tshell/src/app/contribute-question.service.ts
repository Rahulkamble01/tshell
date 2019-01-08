import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from './environment';

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
  uploadUrl: string = environment.serviceUrlPrefix + '/question/upload';
  addQuestionUrl: string = environment.serviceUrlPrefix + '/question/';
  submitForReviewUrl: string = environment.serviceUrlPrefix + '/question/submitforreview';
  approveSubmittedUrl: string = environment.serviceUrlPrefix + '/question/approveandsubmit';
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
    return this.http.post<any>(this.submitForReviewUrl, questionsList, httpOptions);
  }
  approveSubmittted(questionsList): Observable<any> {
    return this.http.post<any>(this.approveSubmittedUrl, questionsList, httpOptions);
  }
  getCsvData() {
    return this.csvData;
  }
  setCsvData(csvData: any) {
    this.csvData = csvData;
  }
}
