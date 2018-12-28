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
  updateSkillUrl = 'tShell/updateSkill';
  graphDataUrl = 'tShell/graph';
  addSkillurl = 'tShell/addskill';
  deleteTopicUrl = "tShell/deleteTopic";

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

  deleteTopic(topicName, skillId): Observable<any> {
    console.log(topicName, skillId);

    const json = `${topicName} ${skillId}`;
    console.log(json);
    return this.http.post(this.deleteTopicUrl, json , httpOptions);
  }


  addSkill(skilly): Observable<any> {
    return this.http.post(this.addSkillurl, skilly, httpOptions);
  }

}
