import { createAction, props } from '@ngrx/store';
import { GameSearchActionTypes } from './game-search-action-types';
import { GetGamesResponseInterface } from '../../games/types/get-games-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

export namespace GameSearchActions {
  export const searchGame = createAction(
    GameSearchActionTypes.SEARCH_GAME,
    props<{ url: string }>()
  );

  export const searchGameSuccess = createAction(
    GameSearchActionTypes.SEARCH_GAME_SUCCESS,
    props<{ getGamesResponse: GetGamesResponseInterface }>()
  );

  export const searchGameFailure = createAction(
    GameSearchActionTypes.SEARCH_GAME_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );
}
