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
export class ViewlearnerService {

  url = "/tShell/getUser/";
  url1 = "/tShell/getAssessment/";

  constructor(private http: HttpClient) { }

  getUserDetails(employeeId): Observable<any> {    
    return this.http.get<any>(this.url + employeeId);
  }

  getUserAssessment(employeeId): Observable<any> {    
    return this.http.get<any>(this.url1 + employeeId);
  }
}
