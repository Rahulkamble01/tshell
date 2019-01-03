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
    let questionUrl: string = '/tShell/question/review/' + skillId;
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

   saveoption(json):Observable<any>{
    let url:string='/tShell/question/save';
    return this.http.post<any>(url,json,httpOptions);
  } 

   searchedQuestions(json): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let url: string = "/tShell/question/searchedquestionslist";
    console.log("url here:"+url);
    console.log("json here:"+json);
    return this.http.post<any>(url, json, httpOptions);
  }

  updateQuestion(question:any):Observable<any> {
    let updateQuestionUrl :string = '/tShell/question/update';
    return this.http.post<any>(updateQuestionUrl, question, httpOptions)
  }

  modifyOptionStatus(optionId:number):Observable<any>{
    let updataOptionUrl:string = '/tShell/question/option/updatestatus/'+optionId;
    return this.http.get<any>(updataOptionUrl);
  }

}


