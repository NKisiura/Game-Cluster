import { createAction, props } from '@ngrx/store';
import { GameDetailsActionTypes } from './game-details-action-types';
import { GetGamesResponseInterface } from '../../games/types/get-games-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

export namespace GameSeriesActions {
  export const getGameSeries = createAction(
    GameDetailsActionTypes.GET_GAME_SERIES,
    props<{ gameId: number }>()
  );

  export const getGameSeriesSuccess = createAction(
    GameDetailsActionTypes.GET_GAME_SERIES_SUCCESS,
    props<{ getGamesResponse: GetGamesResponseInterface }>()
  );

  export const getGameSeriesFailure = createAction(
    GameDetailsActionTypes.GET_GAME_SERIES_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );
}
