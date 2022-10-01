import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../../types/app-state.interface';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GameDetailsService } from '../services/game-details.service';
import { GameDetailsActions } from '../actions/game-details.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';
import { GameAchievementsActions } from '../actions/game-achievements.actions';
import { GetGameAchievementsResponseInterface } from '../types/get-game-achievements-response.interface';

@Injectable()
export class GameAchievementsEffect {
  public dispatchGetAchievementsAction$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(GameDetailsActions.getGameSuccess),
        tap(({ game }) => {
          if (game.achievements_count > 0) {
            this.store$.dispatch(
              GameAchievementsActions.getGameAchievements({
                gameId: game.id,
              })
            );
          }
        })
      ),
    { dispatch: false }
  );

  public getGameAchievements$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameAchievementsActions.getGameAchievements),
      switchMap(({ gameId }) => {
        return this.gameDetailsService.getGameAchievements(gameId).pipe(
          map((getAchievementsResponse: GetGameAchievementsResponseInterface) =>
            GameAchievementsActions.getGameAchievementsSuccess({
              getAchievementsResponse,
            })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(GameAchievementsActions.getGameAchievementsFailure({ error }))
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
