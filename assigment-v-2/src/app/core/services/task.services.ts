import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskServices {
  private apiUrl = 'http://localhost:3008/api/v1/task';

  constructor(private http: HttpClient) {}
  // getData(): Observable<any> {
  //   return this.http.get(this.apiUrl);
  // }

  postData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(this.apiUrl, id);
  }

  update(id: any): Observable<any> {
    return this.http.put(this.apiUrl, id);
  }

  getTaskWithIdProject(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
