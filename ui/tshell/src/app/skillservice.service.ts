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

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.getAllSkillUrl);
  }
  updateSearch(json): Observable<any> {
    return this.http.post(this.updateSearchUrl, json, httpOptions);
  }
  getSkillTopper(id): Observable<any> {
    return this.http.get(this.skillToppersUrl + id);
  }
}
