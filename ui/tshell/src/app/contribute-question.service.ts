import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../app/environment';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})

export class ContributeQuestionService {

  url: string = environment.serviceUrlPrefix + "/question/addQuestion";
  topicsUrl: string = environment.serviceUrlPrefix + "/question/getTopics/";
  userDetailsUrl: string = environment.serviceUrlPrefix + "/question/getuserdata/";

  constructor(private http: HttpClient) {
    this.http = http;
  }

  addQuestion(json): Observable<any> {
    return this.http.post<any[]>(this.url, json, httpOptions);
  }
  getTopics(skillId): Observable<any[]> {

    return this.http.get<any[]>(this.topicsUrl + skillId);
  }
  getUserDetails(employeeId): Observable<any[]> {
    return this.http.get<any[]>(this.userDetailsUrl + employeeId);
  }


}
