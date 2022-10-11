import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private readonly toastService: ToastrService) {}

  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(req)
      .pipe(
        catchError((error: HttpErrorResponse) =>
          this.processRequestError(error)
        )
      );
  }

  private processRequestError(error: HttpErrorResponse) {
    this.toastService.error(
      `${error.message}`,
      `${error.status} ${error.name}`,
      { progressBar: true }
    );
    return throwError(() => error);
  }
}
