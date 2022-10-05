import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../../types/app-state.interface';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GameDetailsService } from '../services/game-details.service';
import { GameDetailsActions } from '../actions/game-details.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { GameSuggestionsActions } from '../actions/game-suggestions.actions';
import { GetGamesResponseInterface } from '../../games/types/get-games-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

@Injectable()
export class GameSuggestionsEffect {
  public dispatchGetGameSuggestionsAction$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(GameDetailsActions.getGameSuccess),
        tap(({ game }) => {
          if (game.suggestions_count > 0) {
            this.store$.dispatch(
              GameSuggestionsActions.getGameSuggestions({
                gameId: game.id,
              })
            );
          }
        })
      ),
    { dispatch: false }
  );

  public getGameSuggestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameSuggestionsActions.getGameSuggestions),
      switchMap(({ gameId }) => {
        return this.gameDetailsService.getGameSuggestions(gameId).pipe(
          map((getGamesResponse: GetGamesResponseInterface) =>
            GameSuggestionsActions.getGameSuggestionsSuccess({
              getGamesResponse,
            })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(GameSuggestionsActions.getGameSuggestionsFailure({ error }))
          )
        );
      })
    )
  );

  public getGameSuggestionsNextPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameSuggestionsActions.getGameSuggestionsNextPage),
      switchMap(({ url }) => {
        return this.gameDetailsService.getGameSuggestionsNextPage(url).pipe(
          map((getGamesResponse: GetGamesResponseInterface) =>
            GameSuggestionsActions.getGameSuggestionsNextPageSuccess({
              getGamesResponse,
            })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(
              GameSuggestionsActions.getGameSuggestionsNextPageFailure({
                error,
              })
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
