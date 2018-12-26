import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class SkillserviceService {
  getAllSkillUrl = 'tShell/skills';
  updateSearchUrl = 'tShell/updateSkillSearch';
  skillToppersUrl = 'tShell/top5list/';
  updateSkillUrl = 'tShell/addSkill';
  graphDataUrl = 'tShell/graph';

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.getAllSkillUrl);
  }
  updateSearch(json): Observable<any> {
    return this.http.post(this.updateSearchUrl, json, httpOptions);
  }

  updateSkill(json): Observable<any> {
    console.log(json);
    return this.http.post(this.updateSkillUrl, json, httpOptions);
  }

  getSkillTopper(id): Observable<any> {
    console.log(this.skillToppersUrl + id);
    return this.http.get(this.skillToppersUrl + id);
  }

  getGraphData(): Observable<any> {
    return this.http.get(this.graphDataUrl);
  }
}
