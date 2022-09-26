import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PublishersService } from '../services/publishers.service';
import { PublishersActions } from '../actions/publishers.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { GetPublishersResponseInterface } from '../types/get-publishers-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

@Injectable()
export class PublishersEffect {
  public getPublishers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PublishersActions.getPublishers),
      switchMap(({ url }) => {
        return this.publishersService.getPublishers(url).pipe(
          map((getPublishersResponse: GetPublishersResponseInterface) =>
            PublishersActions.getPublishersSuccess({ getPublishersResponse })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(PublishersActions.getPublishersFailure({ error }))
          )
        );
      })
    )
  );

  public getPublishersNextPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PublishersActions.getPublishersNextPage),
      switchMap(({ url }) => {
        return this.publishersService.getPublishersNextPage(url).pipe(
          map((getPublishersResponse: GetPublishersResponseInterface) =>
            PublishersActions.getPublishersNextPageSuccess({
              getPublishersResponse,
            })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(PublishersActions.getPublishersNextPageFailure({ error }))
          )
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private publishersService: PublishersService
  ) {}
}
