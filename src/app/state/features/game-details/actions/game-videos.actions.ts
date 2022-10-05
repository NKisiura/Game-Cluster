import { createAction, props } from '@ngrx/store';
import { GameDetailsActionTypes } from './game-details-action-types';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';
import { GetGameVideosResponseInterface } from '../types/get-game-videos-response.interface';

export namespace GameVideosActions {
  export const getGameVideos = createAction(
    GameDetailsActionTypes.GET_GAME_VIDEOS,
    props<{ gameId: number }>()
  );

  export const getGameVideosSuccess = createAction(
    GameDetailsActionTypes.GET_GAME_VIDEOS_SUCCESS,
    props<{ getVideosResponse: GetGameVideosResponseInterface }>()
  );

  export const getGameVideosFailure = createAction(
    GameDetailsActionTypes.GET_GAME_VIDEOS_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );

  export const getGameVideosNextPage = createAction(
    GameDetailsActionTypes.GET_GAME_VIDEOS_NEXT_PAGE,
    props<{ url: string }>()
  );

  export const getGameVideosNextPageSuccess = createAction(
    GameDetailsActionTypes.GET_GAME_VIDEOS_NEXT_PAGE_SUCCESS,
    props<{ getVideosResponse: GetGameVideosResponseInterface }>()
  );

  export const getGameVideosNextPageFailure = createAction(
    GameDetailsActionTypes.GET_GAME_VIDEOS_NEXT_PAGE_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );
}
