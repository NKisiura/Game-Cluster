import { createAction, props } from '@ngrx/store';
import { GameDetailsInterface } from '../../../../global/types/entities/games/game-details.interface';
import { GameDetailsActionTypes } from './game-details-action-types';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';
import { GetGameScreenshotsResponseInterface } from '../types/game-details-state.interface';

export namespace GameDetailsActions {
  export namespace GetGameActions {
    export const getGame = createAction(
      GameDetailsActionTypes.GET_GAME,
      props<{ url: string }>()
    );

    export const getGameSuccess = createAction(
      GameDetailsActionTypes.GET_GAME_SUCCESS,
      props<{ game: GameDetailsInterface }>()
    );

    export const getGameFailure = createAction(
      GameDetailsActionTypes.GET_GAME_FAILURE,
      props<{ error: BackendErrorResponseInterface }>()
    );
  }

  export namespace GetScreenshotsActions {
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
  }
}
