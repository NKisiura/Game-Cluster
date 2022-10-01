import { createAction, props } from '@ngrx/store';
import { GameDetailsInterface } from '../../../../global/types/entities/games/game-details.interface';
import { GameDetailsActionTypes } from './game-details-action-types';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

export namespace GameDetailsActions {
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
