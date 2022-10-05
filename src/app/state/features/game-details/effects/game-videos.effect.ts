import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../../../types/app-state.interface';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GameDetailsService } from '../services/game-details.service';
import { GameDetailsActions } from '../actions/game-details.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { GameVideosActions } from '../actions/game-videos.actions';
import { GetGameVideosResponseInterface } from '../types/get-game-videos-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

@Injectable()
export class GameVideosEffect {
  public dispatchGetGameVideosAction$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(GameDetailsActions.getGameSuccess),
        tap(({ game }) => {
          if (game.youtube_count > 0) {
            this.store$.dispatch(
              GameVideosActions.getGameVideos({ gameId: game.id })
            );
          }
        })
      ),
    { dispatch: false }
  );

  public getGameVideos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameVideosActions.getGameVideos),
      switchMap(({ gameId }) => {
        return this.gameDetailsService.getGameVideos(gameId).pipe(
          map((getVideosResponse: GetGameVideosResponseInterface) =>
            GameVideosActions.getGameVideosSuccess({
              getVideosResponse,
            })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(GameVideosActions.getGameVideosFailure({ error }))
          )
        );
      })
    )
  );

  public getGameVideosNextPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameVideosActions.getGameVideosNextPage),
      switchMap(({ url }) => {
        return this.gameDetailsService.getGameVideosNextPage(url).pipe(
          map((getVideosResponse: GetGameVideosResponseInterface) =>
            GameVideosActions.getGameVideosNextPageSuccess({
              getVideosResponse,
            })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(GameVideosActions.getGameVideosNextPageFailure({ error }))
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
