import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Injectable({
  providedIn: 'root'
})
export class SearchTop5SkillsService {
  url='/tShell/top4searchedskills';
  constructor(private http: HttpClient) { }

  getSkills():Observable<any>{
    console.log("inside top 4 searched skill service");
    console.log( this.http.get<any>(this.url));
    return this.http.get<any>(this.url);

  }
  
    }


  
