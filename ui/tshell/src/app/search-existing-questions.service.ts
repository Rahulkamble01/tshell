import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}


@Injectable({
  providedIn: 'root'
})
export class SearchExistingQuestionsService {

  constructor(private http: HttpClient) { }

  fetchReviewQuestion(skillId): Observable<any> {
    console.log("inside fetch review service")
    let questionUrl: string = '/tShell/question/review/' + skillId;
    return this.http.get<any>(questionUrl);
    
  }

  addOption(newOption): Observable<any> {
    console.log("inside addOption service")
    let urlOption: string = "/tShell/question/option/add ";
    return this.http.post<any>(urlOption, newOption, httpOptions);
  }
}


