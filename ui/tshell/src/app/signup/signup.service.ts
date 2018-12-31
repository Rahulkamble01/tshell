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
    url: string = "/tShell/signup/"
    //url1 = "/tShell/checkUserExist"
    constructor(private http: HttpClient){}
    
    signup(json): Observable<any>{
        return this.http.post<any>(this.url, json, httpOptions);
    }

   
    /* checkUserExist(json): Observable<any>{
        return this.http.post<any>(this.url1, json, httpOptions);
    } */
}