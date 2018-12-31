import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
};
@Injectable({
  providedIn: 'root'
})
export class ExitAssesmentService {
  testurl = '/tshell/test';
  constructor(private http: HttpClient) { }

  test(): Observable<any> {
    return this.http.get(this.testurl);
  }
  get(url: string) {
    console.log(url);
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: '/data/aspnet.json', name: 'Asp.Net' },
      { id: 'data/csharp.json', name: 'C Sharp' },
      { id: 'data/designPatterns.json', name: 'Design Patterns' }
    ];
  }
}
