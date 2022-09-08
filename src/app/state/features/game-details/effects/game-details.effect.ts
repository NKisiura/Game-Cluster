import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GameDetailsService } from '../services/game-details.service';
import { GameDetailsActions } from '../actions/game-details.actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { GameDetailsInterface } from '../../../../global/types/entities/games/game-details.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

@Injectable()
export class GameDetailsEffect {
  public getGameDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameDetailsActions.getGameDetails),
      switchMap(({ url }) => {
        return this.gameDetailsService.getGameDetails(url).pipe(
          map((gameDetails: GameDetailsInterface) =>
            GameDetailsActions.getGameDetailsSuccess({ gameDetails })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(GameDetailsActions.getGamesDetailsFailure({ error }))
          )
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private gameDetailsService: GameDetailsService
  ) {}
}
