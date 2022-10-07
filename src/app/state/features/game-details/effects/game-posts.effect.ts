import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { GameDetailsActions } from '../actions/game-details.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootStateInterface } from '../../../types/root-state.interface';
import { GameDetailsService } from '../services/game-details.service';
import { GamePostsActions } from '../actions/game-posts.actions';
import { GetGamePostsResponseInterface } from '../types/get-game-posts-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

@Injectable()
export class GamePostsEffect {
  public dispatchGetGamePostsAction$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(GameDetailsActions.getGameSuccess),
        tap(({ game }) => {
          if (game.reddit_count > 0) {
            this.store$.dispatch(
              GamePostsActions.getGamePosts({
                gameId: game.id,
              })
            );
          }
        })
      ),
    { dispatch: false }
  );

  public getGamePosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamePostsActions.getGamePosts),
      switchMap(({ gameId }) => {
        return this.gameDetailsService.getGamePosts(gameId).pipe(
          map((getPostsResponse: GetGamePostsResponseInterface) =>
            GamePostsActions.getGamePostsSuccess({ getPostsResponse })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(GamePostsActions.getGamePostsFailure({ error }))
          )
        );
      })
    )
  );

  public getGamePostsNextPage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GamePostsActions.getGamePostsNextPage),
      switchMap(({ url }) => {
        return this.gameDetailsService.getGamePostsNextPage(url).pipe(
          map((getPostsResponse: GetGamePostsResponseInterface) =>
            GamePostsActions.getGamePostsNextPageSuccess({ getPostsResponse })
          ),
          catchError((error: BackendErrorResponseInterface) =>
            of(GamePostsActions.getGamePostsNextPageFailure({ error }))
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
