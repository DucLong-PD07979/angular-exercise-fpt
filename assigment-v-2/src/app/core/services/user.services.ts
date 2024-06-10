import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServices {
  private apiUrl = 'http://localhost:3008/api/v1/user';

  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  postData(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(this.apiUrl, id);
  }

  update(id: any): Observable<any> {
    return this.http.put(this.apiUrl, id);
  }

  getUserRoleMembership(): Observable<any> {
    return this.http.get(`${this.apiUrl + '/membership'}`);
  }

  getMemberWithId(memberList: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/memberlist?memberList=${memberList}`);
  }
}
