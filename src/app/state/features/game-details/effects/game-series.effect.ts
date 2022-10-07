import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStateInterface } from '../../../types/root-state.interface';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GameDetailsService } from '../services/game-details.service';
import { GameDetailsActions } from '../actions/game-details.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { GameSeriesActions } from '../actions/game-series.actions';
import { GetGamesResponseInterface } from '../../games/types/get-games-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

@Injectable()
export class GameSeriesEffect {
  public dispatchGetGameSeriesAction$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(GameDetailsActions.getGameSuccess),
        tap(({ game }) => {
          if (game.game_series_count > 0) {
            this.store$.dispatch(
              GameSeriesActions.getGameSeries({
                gameId: game.id,
              })
            );
          }
        })
      ),
    { dispatch: false }
  );

  public getGameSeries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameSeriesActions.getGameSeries),
      switchMap(({ gameId }) => {
        return this.gameDetailsService.getGameSeries(gameId).pipe(
          map((getGamesResponse: GetGamesResponseInterface) =>
            GameSeriesActions.getGameSeriesSuccess({ getGamesResponse })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(GameSeriesActions.getGameSeriesFailure({ error }))
          )
        );
      })
    )
  );

  constructor(
    private readonly store$: Store<RootStateInterface>,
    private readonly actions$: Actions,
    private readonly gameDetailsService: GameDetailsService
  ) {}
}
