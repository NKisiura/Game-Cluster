import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_KEY } from '../constants/api-constants';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedRequest = req.clone({
      params: req.params.set('key', API_KEY),
    });
    return next.handle(modifiedRequest);
  }
}
