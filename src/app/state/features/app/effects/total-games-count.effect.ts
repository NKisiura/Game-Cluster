import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AppService } from '../services/app.service';
import { TotalGamesCountActions } from '../actions/total-games-count.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

@Injectable()
export class TotalGamesCountEffect {
  public getTotalGamesCount$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TotalGamesCountActions.getTotalGamesCount),
      switchMap(() => {
        return this.appService.getTotalGamesCount().pipe(
          map((totalGamesCount) =>
            TotalGamesCountActions.getTotalGamesCountSuccess({
              totalGamesCount,
            })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(TotalGamesCountActions.getTotalGamesCountFailure({ error }))
          )
        );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly appService: AppService
  ) {}
}
