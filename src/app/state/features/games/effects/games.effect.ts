import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GamesService } from '../services/games.service';
import { GamesActions } from '../actions/games.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { GetGamesResponseInterface } from '../types/get-games-response.interface';

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
          catchError(() => of(GamesActions.getGamesFailure()))
        );
      })
    )
  );
  constructor(private actions$: Actions, private gamesService: GamesService) {}
}
