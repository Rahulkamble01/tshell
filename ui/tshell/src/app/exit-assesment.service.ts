import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './environment';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};
@Injectable({
  providedIn: 'root'
})
export class ExitAssesmentService {
  testurl = environment.serviceUrlPrefix + '/test';
  allQuestionIdURL = environment.serviceUrlPrefix + '/question/allquestionid/';
  questionUrl = environment.serviceUrlPrefix + '/question/questionId/';
  startAssesmentUrl = environment.serviceUrlPrefix + '/assessment/start';
  saveResponseUrl = environment.serviceUrlPrefix + '/assessment/saveresponse';
  submitAssessmentURL = environment.serviceUrlPrefix + '/assessment/submit';
  constructor(private http: HttpClient) { }

  getQuestionId(id): Observable<any> {
    return this.http.get(this.allQuestionIdURL + id);
  }

  // test(): Observable<any> {
  //   return this.http.get(this.testurl);
  // }
  getQuestion(json): Observable<any> {
    return this.http.get(this.questionUrl + json);
  }

  startAssessment(json): Observable<any> {
    return this.http.post(this.startAssesmentUrl, json, httpOptions);
  }

  saveAssessmentResponse(json): Observable<any> {
    return this.http.post(this.saveResponseUrl, json, httpOptions);
  }
  submitAssessment(json): Observable<any> {
    return this.http.post(this.submitAssessmentURL, json, httpOptions);
  }

  get(url: string) {
    console.log(url);
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: '/data/aspnet.json', name: 'Asp.Net' },
      { id: 'data/csharp.json', name: 'C Sharp' },
      { id: 'data/designPatterns.json', name: 'Design Patterns' }
    ];
  }
}
