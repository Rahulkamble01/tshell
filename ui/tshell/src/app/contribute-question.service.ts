import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContributeQuestionService {
  uploadUrl: string = '/tShell-webservice/contribute/bulkupload';
  constructor(private http: HttpClient) {
    this.http = http;
  }
  uploadQuestions(formData: any): Observable<any> {
    return this.http.post(this.uploadUrl, formData);
  }
}
