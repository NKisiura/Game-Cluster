import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GamesService } from '../services/games.service';
import { GamesActions } from '../actions/games.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { GetGamesResponseInterface } from '../types/get-games-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

@Injectable()
export class GamesEffect {
  public getGames$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesActions.getGames),
      switchMap(({ url }) => {
        return this.gamesService.getGames(url).pipe(
          map((getGamesResponse: GetGamesResponseInterface) =>
            GamesActions.getGamesSuccess({ getGamesResponse })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(GamesActions.getGamesFailure({ error }))
          )
        );
      })
    )
  );

  public getGamesNextPage = createEffect(() =>
    this.actions$.pipe(
      ofType(GamesActions.getGamesNextPage),
      switchMap(({ url }) => {
        return this.gamesService.getGamesNextPage(url).pipe(
          map((getNextPageResponse: GetGamesResponseInterface) =>
            GamesActions.getGamesNextPageSuccess({ getNextPageResponse })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(GamesActions.getGamesNextPageFailure({ error }))
          )
        );
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private readonly gamesService: GamesService
  ) {}
}
