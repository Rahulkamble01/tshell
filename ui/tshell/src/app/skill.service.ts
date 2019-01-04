import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../app/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  url: string = environment.serviceUrlPrefix + "/skill/recentSkillList/"

  constructor(private http: HttpClient) { }

  getrecentSkill(): Observable<any> {

    console.log("in skillService");
    console.log(this.url);
    return this.http.get<any>(this.url);

  }
}
