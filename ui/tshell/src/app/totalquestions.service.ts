import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environment';

@Injectable({
  providedIn: 'root'
})
export class TotalquestionsService {
  url: string =environment.serviceUrlPrefix+"/rest/user/get/";

  constructor(private http: HttpClient) { }

  totalquestion(id): Observable<any> {
    console.log(id);
    return this.http.get<any>(this.url + 1);
  }
}
