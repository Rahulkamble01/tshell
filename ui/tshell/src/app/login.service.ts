import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, config } from 'rxjs';
<<<<<<< HEAD
import { environment} from '../app/environment'
=======
import { environment } from './enviroment';
>>>>>>> Skills

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {

<<<<<<< HEAD
  url: string = environment.serviceUrlPrefix + "/authenticate";
=======
  url: string = environment.serviceUrlPrefix + '/authenticate';
>>>>>>> Skills

  constructor(private http: HttpClient) { }

  authenticateUser(json): Observable<any> {
    console.log("in addUser()" + json);
    return this.http.post<any>(this.url, json, httpOptions);
  }
}
