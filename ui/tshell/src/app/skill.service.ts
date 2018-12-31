import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SkillService {

  url: string ="/tShell/skill/recentSkillList/"

  constructor(private http: HttpClient) { }

  getrecentSkill(): Observable<any> {

    console.log("in skillService")
    console.log(this.url)
    return this.http.get<any>(this.url);

  }
}
