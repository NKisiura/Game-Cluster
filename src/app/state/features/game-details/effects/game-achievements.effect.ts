import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../../types/app-state.interface';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GameDetailsService } from '../services/game-details.service';
import { GameDetailsActions } from '../actions/game-details.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { GetGameAchievementsResponseInterface } from '../types/game-details-state.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

@Injectable()
export class GameAchievementsEffect {
  public dispatchGetAchievementsAction$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(GameDetailsActions.GetGameActions.getGameSuccess),
        tap(({ game }) => {
          if (game.achievements_count > 0) {
            this.store$.dispatch(
              GameDetailsActions.GetGameAchievementsActions.getGameAchievements(
                {
                  gameId: game.id,
                }
              )
            );
          }
        })
      ),
    { dispatch: false }
  );

  public getGameAchievements$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameDetailsActions.GetGameAchievementsActions.getGameAchievements),
      switchMap(({ gameId }) => {
        return this.gameDetailsService.getGameAchievements(gameId).pipe(
          map((getAchievementsResponse: GetGameAchievementsResponseInterface) =>
            GameDetailsActions.GetGameAchievementsActions.getGameAchievementsSuccess(
              { getAchievementsResponse }
            )
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(
              GameDetailsActions.GetGameAchievementsActions.getGameAchievementsFailure(
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
