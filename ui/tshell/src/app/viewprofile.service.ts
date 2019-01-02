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
export class ViewprofileService {

  url = "/tShell/getUser/";
  url1 = "/tShell/getAssessment/";
  url2 = "/tShell/save";
  url3 = "/tShell/getRoles";
  url4 = "/tShell/update";

  constructor(private http: HttpClient) { }

  getUserDetails(employeeId): Observable<any> {    
    return this.http.get<any>(this.url + employeeId);
  }

  getUserAssessment(employeeId): Observable<any> {    
    return this.http.get<any>(this.url1 + employeeId);
  }

  save(json): Observable<any> {    
    console.log(json);
    return this.http.post<any>(this.url2 ,json,httpOptions);
  }

  getRole(): Observable<any> {    
    return this.http.get<any>(this.url3);
  }
  updateUser(user): Observable<any> {    
    console.log("inside updateUser");
    console.log(user);
    return this.http.post<any>(this.url4,user,httpOptions);
  }
}
