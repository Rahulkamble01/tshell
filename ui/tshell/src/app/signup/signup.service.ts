import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import { HttpClient,HttpHeaders} from '@angular/common/http';

const httpOptions ={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
@Injectable({
    providedIn: 'root'
})
export class SignupService{
    url: string = "/tshell/signup"
    constructor(private http: HttpClient){}
    signup(json): Observable<any>{
        return this.http.post<any>(this.url, json, httpOptions);
    }
}