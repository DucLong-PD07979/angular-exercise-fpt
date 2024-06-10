import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProjectServices {
  private apiUrl = 'http://localhost:3008/api/v1/projects';

  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    const accessToken = localStorage.getItem('accessToken') || {};
    return this.http.get(this.apiUrl, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });
  }

  postData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  update(id: any): Observable<any> {
    return this.http.put(this.apiUrl, id);
  }

  getAllProjectWithOwer(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/user/${id}`);
  }

  getProjectWithSlug(slug: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/slug/${slug}`);
  }

  getProjectWithMemberId(id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/member/${id}`);
  }
}
