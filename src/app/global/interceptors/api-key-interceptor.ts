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
    if (this.isRequestAlreadyHasApiKey(req)) {
      return next.handle(req);
    }
    return this.getModifiedRequestWithApiKey(req, next);
  }

  private isRequestAlreadyHasApiKey(request: HttpRequest<any>): boolean {
    return request.urlWithParams.includes('key');
  }

  private getModifiedRequestWithApiKey(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifiedRequest = request.clone({
      params: request.params.set('key', API_KEY),
    });
    return next.handle(modifiedRequest);
  }
}
