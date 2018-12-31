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
    let questionUrl: string = '/tShell/question/revie/' + skillId;
    return this.http.get<any>(questionUrl);
    
  }

  addOption(newOption): Observable<any> {
    let urlOption: string = "/tShell/question/option/add";
    return this.http.post<any>(urlOption, newOption, httpOptions);
  }

  updateQuestionStatus(questionId, status, skillId): Observable<any> {
    let updateQuestionUrl:string = '/tShell/question/updatestatus/'+questionId+'/'+status+'/'+skillId;
    return this.http.get<any>(updateQuestionUrl);
  }

  deleteOption(id:number):Observable<any>{
    let url:string='/tShell/question/option/delete/'+id;
     return this.http.get<any>(url);
   }
}


