import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class SkillserviceService {
  getAllSkillUrl = environment.serviceUrlPrefix+'/skills';
  addSkillurl = environment.serviceUrlPrefix+'/addskill';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.getAllSkillUrl);
  }


  addSkill(skillJson): Observable<any> {
    return this.http.post(this.addSkillurl, skillJson, httpOptions);
  }

}
