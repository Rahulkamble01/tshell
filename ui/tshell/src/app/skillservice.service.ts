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
  getAllSkillUrl = `${environment.serviceUrlPrefix}/skill/skills`;
  updateSearchUrl = `${environment.serviceUrlPrefix}/skill/updateSkillSearch`;
  skillToppersUrl = `${environment.serviceUrlPrefix}/assessment/top5list/`;
  updateSkillUrl = `${environment.serviceUrlPrefix}/skill/updateSkill`;
  addSkillurl = `${environment.serviceUrlPrefix}/skill/addskill`;
  deleteTopicUrl = `${environment.serviceUrlPrefix}/skill/deleteTopic`;
  ReferenceSkillUrl = `${environment.serviceUrlPrefix}/skill/referenceskill/`;
  keySearchUrl = `${environment.serviceUrlPrefix}/skill/getSkillsOnSearch/`;
  addReferenceSkillUrl = `${environment.serviceUrlPrefix}/skill/addreferenceskill`;
  deleteReferenceSkillUrl = `${environment.serviceUrlPrefix}/skill/deleteReferenceskill/`;
  skill: any;

  constructor(private http: HttpClient) { }

  getSkill() {
    return this.skill;
  }

  setSkill(skill: any) {
    this.skill = skill;
  }

  getAll(): Observable<any> {
    return this.http.get(this.getAllSkillUrl);
  }

  updateSearch(json): Observable<any> {
    return this.http.post(this.updateSearchUrl, json, httpOptions);
  }

  updateSkill(json): Observable<any> {
    return this.http.post(this.updateSkillUrl, json, httpOptions);
  }

  addReferenceSkill(json): Observable<any> {
    console.log('1324');
    return this.http.post(this.addReferenceSkillUrl, json, httpOptions);
  }

  deleteReferenceSkill(id): Observable<any> {
    return this.http.get(this.deleteReferenceSkillUrl + id);
  }

  getSkillTopper(id): Observable<any> {
    console.log(this.skillToppersUrl + id);
    return this.http.get(this.skillToppersUrl + id);
  }

  getReferenceSkill(id): Observable<any> {
    console.log(this.ReferenceSkillUrl + id);
    return this.http.get(this.ReferenceSkillUrl + id);
  }

  skillsOnSearch(key): Observable<any> {
    console.log(this.keySearchUrl + key);
    return this.http.get(this.keySearchUrl + key);
  }

  // getGraphDataOfSkill(skillName): Observable<any> {
  //   return this.http.get(this.graphDataUrl + skillName);
  // }

  // getGraphData(): Observable<any> {
  //   return this.http.get(this.graphDataUrl);
  // }

  deleteTopic(topicName, skillId): Observable<any> {
    console.log(topicName, skillId);

    const json = `${topicName} ${skillId}`;
    console.log(json);
    return this.http.post(this.deleteTopicUrl, json, httpOptions);
  }


  addSkill(skilly): Observable<any> {
    return this.http.post(this.addSkillurl, skilly, httpOptions);
  }

}
