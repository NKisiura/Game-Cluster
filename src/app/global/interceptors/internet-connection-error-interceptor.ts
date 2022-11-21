import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { OnlineStatusService, OnlineStatusType } from 'ngx-online-status';
import { Injectable } from '@angular/core';

@Injectable()
export class InternetConnectionErrorInterceptor implements HttpInterceptor {
  private onlineStatus!: OnlineStatusType;

  constructor(
    private readonly onlineStatusService: OnlineStatusService,
    private readonly toastService: ToastrService
  ) {
    this.onlineStatus = this.getInitialOnlineStatus();
    this.trackOnlineStatus();
  }

  private getInitialOnlineStatus(): OnlineStatusType {
    return this.onlineStatusService.getStatus();
  }

  private trackOnlineStatus(): void {
    this.onlineStatusService.status.subscribe((status: OnlineStatusType) => {
      this.onlineStatus = status;
      this.displayCurrentOnlineStatus(status);
    });
  }

  private displayCurrentOnlineStatus(status: OnlineStatusType): void {
    status === OnlineStatusType.OFFLINE
      ? this.toastService.error('Internet connection lost')
      : this.toastService.success('Internet connection restored');
  }

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
    if (this.onlineStatus === OnlineStatusType.OFFLINE) {
      this.toastService.error('You are offline');
    }
    return throwError(() => error);
  }
}
