import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
  })
}


@Injectable({
  providedIn: 'root'
})
export class SearchExistingQuestionsService {

  constructor(private http: HttpClient) { }

  fetchQuestions(searchQuery): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let urlSearchQuestions: string = '/questions/findExistingQuestions/' + searchQuery;
    console.log(urlSearchQuestions);
    return this.http.get<any>(urlSearchQuestions);
}


     urlOption :string = "/tShell/question/option/add ";

      addOption(option1):Observable<any>{
       console.log("inside add option");
     console.log(option1);
     return this.http.post<any>(this.urlOption, option1, httpOptions);
}

 

}


