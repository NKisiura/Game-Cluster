import { createAction, props } from '@ngrx/store';
import { GameDetailsActionTypes } from './game-details-action-types';
import { GetGamePostsResponseInterface } from '../types/get-game-posts-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

export namespace GamePostsActions {
  export const getGamePosts = createAction(
    GameDetailsActionTypes.GET_GAME_POSTS,
    props<{ gameId: number }>()
  );

  export const getGamePostsSuccess = createAction(
    GameDetailsActionTypes.GET_GAME_POSTS_SUCCESS,
    props<{ getPostsResponse: GetGamePostsResponseInterface }>()
  );

  export const getGamePostsFailure = createAction(
    GameDetailsActionTypes.GET_GAME_POSTS_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );

  export const getGamePostsNextPage = createAction(
    GameDetailsActionTypes.GET_GAME_POSTS_NEXT_PAGE,
    props<{ url: string }>()
  );

  export const getGamePostsNextPageSuccess = createAction(
    GameDetailsActionTypes.GET_GAME_POSTS_NEXT_PAGE_SUCCESS,
    props<{ getPostsResponse: GetGamePostsResponseInterface }>()
  );

  export const getGamePostsNextPageFailure = createAction(
    GameDetailsActionTypes.GET_GAME_POSTS_NEXT_PAGE_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );
}
