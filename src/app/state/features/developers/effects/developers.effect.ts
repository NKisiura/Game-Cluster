import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { DevelopersService } from '../services/developers.service';
import { DevelopersActions } from '../actions/developers.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { GetDevelopersResponseInterface } from '../types/get-developers-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

@Injectable()
export class DevelopersEffect {
  public getDevelopers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DevelopersActions.getDevelopers),
      switchMap(({ url }) => {
        return this.developersService.getDevelopers(url).pipe(
          map((getDevelopersResponse: GetDevelopersResponseInterface) =>
            DevelopersActions.getDevelopersSuccess({ getDevelopersResponse })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(DevelopersActions.getDevelopersFailure({ error }))
          )
        );
      })
    )
  );

  public getDevelopersNextPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DevelopersActions.getDevelopersNextPage),
      switchMap(({ url }) => {
        return this.developersService.getDevelopersNextPage(url).pipe(
          map((getDevelopersResponse: GetDevelopersResponseInterface) =>
            DevelopersActions.getDevelopersNextPageSuccess({
              getDevelopersResponse,
            })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(DevelopersActions.getDevelopersNextPageFailure({ error }))
          )
        );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly developersService: DevelopersService
  ) {}
}
