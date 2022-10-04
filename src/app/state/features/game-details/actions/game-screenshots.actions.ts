import { createAction, props } from '@ngrx/store';
import { GameDetailsActionTypes } from './game-details-action-types';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';
import { GetGameScreenshotsResponseInterface } from '../types/get-game-screenshots-response.interface';

export namespace GameScreenshotsActions {
  export const getGameScreenshots = createAction(
    GameDetailsActionTypes.GET_GAME_SCREENSHOTS,
    props<{ gameId: number }>()
  );

  export const getGameScreenshotsSuccess = createAction(
    GameDetailsActionTypes.GET_GAME_SCREENSHOTS_SUCCESS,
    props<{ getScreenshotsResponse: GetGameScreenshotsResponseInterface }>()
  );

  export const getGameScreenshotsFailure = createAction(
    GameDetailsActionTypes.GET_GAME_SCREENSHOTS_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );

  export const getGameScreenshotsNextPage = createAction(
    GameDetailsActionTypes.GET_GAME_SCREENSHOTS_NEXT_PAGE,
    props<{ url: string }>()
  );

  export const getGameScreenshotsNextPageSuccess = createAction(
    GameDetailsActionTypes.GET_GAME_SCREENSHOTS_NEXT_PAGE_SUCCESS,
    props<{ getScreenshotsResponse: GetGameScreenshotsResponseInterface }>()
  );

  export const getGameScreenshotsNextPageFailure = createAction(
    GameDetailsActionTypes.GET_GAME_SCREENSHOTS_NEXT_PAGE_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );
}
