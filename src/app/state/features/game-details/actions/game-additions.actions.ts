import { createAction, props } from '@ngrx/store';
import { GameDetailsActionTypes } from './game-details-action-types';
import { GetGamesResponseInterface } from '../../games/types/get-games-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

export namespace GameAdditionsActions {
  export const getGameAdditions = createAction(
    GameDetailsActionTypes.GET_GAME_ADDITIONS,
    props<{ gameId: number }>()
  );

  export const getGameAdditionsSuccess = createAction(
    GameDetailsActionTypes.GET_GAME_ADDITIONS_SUCCESS,
    props<{ getGamesResponse: GetGamesResponseInterface }>()
  );

  export const getGameAdditionsFailure = createAction(
    GameDetailsActionTypes.GET_GAME_ADDITIONS_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );
}
