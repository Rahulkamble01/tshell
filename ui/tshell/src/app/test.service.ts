import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environment';
const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class TestService {
  url:string=environment.serviceUrlPrefix+"/gettop5tests/"
  constructor(private http:HttpClient) { } 
  getTestDetails():Observable<any>{
    console.log("hi");
    console.log(this.url);
    return this.http.get<any>(this.url)
}
}