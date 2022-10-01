import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GameDetailsService } from '../services/game-details.service';
import { GameDetailsActions } from '../actions/game-details.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { GetGameScreenshotsResponseInterface } from '../types/game-details-state.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../../types/app-state.interface';

@Injectable()
export class GameScreenshotsEffect {
  public dispatchGetScreenshotsAction$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(GameDetailsActions.GetGameActions.getGameSuccess),
        tap(({ game }) =>
          this.store$.dispatch(
            GameDetailsActions.GetScreenshotsActions.getGameScreenshots({
              gameId: game.id,
            })
          )
        )
      ),
    { dispatch: false }
  );

  public getScreenshots$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameDetailsActions.GetScreenshotsActions.getGameScreenshots),
      switchMap(({ gameId }) => {
        return this.gameDetailsService.getGameScreenshots(gameId).pipe(
          map((getScreenshotsResponse: GetGameScreenshotsResponseInterface) =>
            GameDetailsActions.GetScreenshotsActions.getGameScreenshotsSuccess({
              getScreenshotsResponse,
            })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(
              GameDetailsActions.GetScreenshotsActions.getGameScreenshotsFailure(
                { error }
              )
            )
          )
        );
      })
    )
  );

  constructor(
    private store$: Store<AppStateInterface>,
    private actions$: Actions,
    private gameDetailsService: GameDetailsService
  ) {}
}
