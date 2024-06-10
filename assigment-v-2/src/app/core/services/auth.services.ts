import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3008/api/v1/auth';

  constructor(private http: HttpClient) {}

  login(payload: any): Observable<any> {
    const { password, email } = payload;
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  register(payload: any): Observable<any> {
    const { name, password, email, passwordComfirm } = payload;
    return this.http.post(`${this.apiUrl}/register`, {
      name,
      password,
      email,
      passwordComfirm,
    });
  }

  getDecodedToken(): any {
    const helper = new JwtHelperService();
    const accessToken: string | null = localStorage.getItem('accessToken');
    if (accessToken !== null) {
      const decodedToken = helper.decodeToken(accessToken);
      console.log(decodedToken);
      return decodedToken;
    } else {
      return false;
    }
  }

  logout(): void {
    localStorage.removeItem('accessToken');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('accessToken');
  }
}
