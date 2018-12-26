import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TotalQuestionsService {
  url: string = "/tShell/question/contributed/";

  constructor(private http: HttpClient) { }

  totalquestion(employeeId): Observable<any> {
    console.log(employeeId);
    return this.http.get<any>(this.url + employeeId);
  }

}
