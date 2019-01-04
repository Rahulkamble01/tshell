import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class SearchExistingQuestionsService {

  constructor(private http: HttpClient) { }

  fetchQuestions(searchQuery): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let urlSearchQuestions: string = environment.serviceUrlPrefix+'/questions/findExistingQuestions/' + searchQuery;
    console.log(urlSearchQuestions);
    return this.http.get<any>(urlSearchQuestions);
  }
}
