import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchExistingQuestionsService {

  constructor(private http:HttpClient) { }

  fetchQuestions(searchQuery):Observable<any>{
    let urlSearchQuestions:string = '/questions/findExistingQuestions/'+searchQuery;
    console.log(urlSearchQuestions);
    return this.http.get<any>(urlSearchQuestions);
  }
}
