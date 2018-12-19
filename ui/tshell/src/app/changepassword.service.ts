import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChangePassword } from './ChangePassword/changepassword';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};



@Injectable({
  providedIn: 'root'
})
export class ChangepasswordService {

  url = "/getPassword/";
  url1 = "/savePassword";

  constructor(private http: HttpClient) { }

  // getDetails(empid): Observable<any> {

  //   return this.http.get<any>(this.url + empid, httpOptions);
  // }

  // savePassword(element): Observable<any> {
  //   console.log("inside the save password service");
  //   return this.http.post<any>(this.url1, element, httpOptions);
  // }
}
