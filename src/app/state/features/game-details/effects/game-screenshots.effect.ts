import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GameDetailsService } from '../services/game-details.service';
import { GameDetailsActions } from '../actions/game-details.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';
import { Store } from '@ngrx/store';
import { RootStateInterface } from '../../../types/root-state.interface';
import { GameScreenshotsActions } from '../actions/game-screenshots.actions';
import { GetGameScreenshotsResponseInterface } from '../types/get-game-screenshots-response.interface';

@Injectable()
export class GameScreenshotsEffect {
  public dispatchGetScreenshotsAction$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(GameDetailsActions.getGameSuccess),
        tap(({ game }) => {
          if (game.screenshots_count > 0) {
            this.store$.dispatch(
              GameScreenshotsActions.getGameScreenshots({
                gameId: game.id,
              })
            );
          }
        })
      ),
    { dispatch: false }
  );

  public getScreenshots$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameScreenshotsActions.getGameScreenshots),
      switchMap(({ gameId }) => {
        return this.gameDetailsService.getGameScreenshots(gameId).pipe(
          map((getScreenshotsResponse: GetGameScreenshotsResponseInterface) =>
            GameScreenshotsActions.getGameScreenshotsSuccess({
              getScreenshotsResponse,
            })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(GameScreenshotsActions.getGameScreenshotsFailure({ error }))
          )
        );
      })
    )
  );

  public getGameScreenshotsNextPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameScreenshotsActions.getGameScreenshotsNextPage),
      switchMap(({ url }) => {
        return this.gameDetailsService.getGameScreenshotsNextPage(url).pipe(
          map((getScreenshotsResponse: GetGameScreenshotsResponseInterface) =>
            GameScreenshotsActions.getGameScreenshotsNextPageSuccess({
              getScreenshotsResponse,
            })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(
              GameScreenshotsActions.getGameScreenshotsNextPageFailure({
                error,
              })
            )
          )
        );
      })
    )
  );

  constructor(
    private store$: Store<RootStateInterface>,
    private actions$: Actions,
    private gameDetailsService: GameDetailsService
  ) {}
}
