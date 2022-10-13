import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GameSearchService } from '../services/game-search.service';
import { GameSearchActions } from '../actions/game-search.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { GetGamesResponseInterface } from '../../games/types/get-games-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

@Injectable()
export class GameSearchEffect {
  public searchGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameSearchActions.searchGame),
      switchMap(({ url }) => {
        return this.gameSearchService.searchGames(url).pipe(
          map((getGamesResponse: GetGamesResponseInterface) =>
            GameSearchActions.searchGameSuccess({ getGamesResponse })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(GameSearchActions.searchGameFailure({ error }))
          )
        );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly gameSearchService: GameSearchService
  ) {}
}
