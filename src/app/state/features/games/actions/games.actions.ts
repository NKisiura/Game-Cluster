import { createAction, props } from '@ngrx/store';
import { GamesActionTypes } from './games-action-types';
import { GetGamesResponseInterface } from '../types/get-games-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

export namespace GamesActions {
  export const getGames = createAction(
    GamesActionTypes.GET_GAMES,
    props<{ url: string }>()
  );

  export const getGamesSuccess = createAction(
    GamesActionTypes.GET_GAMES_SUCCESS,
    props<{ getGamesResponse: GetGamesResponseInterface }>()
  );

  export const getGamesFailure = createAction(
    GamesActionTypes.GET_GAMES_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );
}
