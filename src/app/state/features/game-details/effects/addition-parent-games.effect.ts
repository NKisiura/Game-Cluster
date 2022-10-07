import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RootStateInterface } from '../../../types/root-state.interface';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GameDetailsService } from '../services/game-details.service';
import { GameDetailsActions } from '../actions/game-details.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { AdditionParentGamesActions } from '../actions/addition-parent-games.actions';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';
import { GetGamesResponseInterface } from '../../games/types/get-games-response.interface';

@Injectable()
export class AdditionParentGamesEffect {
  public dispatchGetAdditionParentGamesAction$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(GameDetailsActions.getGameSuccess),
        tap(({ game }) => {
          if (game.parents_count > 0) {
            this.store$.dispatch(
              AdditionParentGamesActions.getAdditionParentGames({
                gameId: game.id,
              })
            );
          }
        })
      ),
    { dispatch: false }
  );

  public getAdditionParentGames = createEffect(() =>
    this.actions$.pipe(
      ofType(AdditionParentGamesActions.getAdditionParentGames),
      switchMap(({ gameId }) => {
        return this.gameDetailsService.getAdditionParentGames(gameId).pipe(
          map((getGamesResponse: GetGamesResponseInterface) =>
            AdditionParentGamesActions.getAdditionParentGamesSuccess({
              getGamesResponse,
            })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(
              AdditionParentGamesActions.getAdditionParentGamesFailure({
                error,
              })
            )
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
