import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStateInterface } from '../../../types/root-state.interface';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GameDetailsService } from '../services/game-details.service';
import { GameDetailsActions } from '../actions/game-details.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { GameAdditionsActions } from '../actions/game-additions.actions';
import { GetGamesResponseInterface } from '../../games/types/get-games-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

@Injectable()
export class GameAdditionsEffect {
  public dispatchGetGameAdditionsAction$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(GameDetailsActions.getGameSuccess),
        tap(({ game }) => {
          if (game.additions_count > 0) {
            this.store$.dispatch(
              GameAdditionsActions.getGameAdditions({
                gameId: game.id,
              })
            );
          }
        })
      ),
    { dispatch: false }
  );

  public getGameAdditions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameAdditionsActions.getGameAdditions),
      switchMap(({ gameId }) => {
        return this.gameDetailsService.getGameAdditions(gameId).pipe(
          map((getGamesResponse: GetGamesResponseInterface) =>
            GameAdditionsActions.getGameAdditionsSuccess({ getGamesResponse })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(GameAdditionsActions.getGameAdditionsFailure({ error }))
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
