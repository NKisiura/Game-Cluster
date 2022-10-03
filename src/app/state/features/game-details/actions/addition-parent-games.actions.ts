import { createAction, props } from '@ngrx/store';
import { GameDetailsActionTypes } from './game-details-action-types';
import { GetGamesResponseInterface } from '../../games/types/get-games-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

export namespace AdditionParentGamesActions {
  export const getAdditionParentGames = createAction(
    GameDetailsActionTypes.GET_ADDITION_PARENT_GAMES,
    props<{ gameId: number }>()
  );

  export const getAdditionParentGamesSuccess = createAction(
    GameDetailsActionTypes.GET_ADDITION_PARENT_GAMES_SUCCESS,
    props<{ getGamesResponse: GetGamesResponseInterface }>()
  );

  export const getAdditionParentGamesFailure = createAction(
    GameDetailsActionTypes.GET_ADDITION_PARENT_GAMES_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );
}
