import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class AppInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('accessToken') || {};
    console.log(accessToken);
    const headerSet = req.clone({
      url: req.url,
      setHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return next.handle(headerSet);
  }
}
