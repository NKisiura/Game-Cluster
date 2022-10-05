import { createAction, props } from '@ngrx/store';
import { GameDetailsActionTypes } from './game-details-action-types';
import { GetGamesResponseInterface } from '../../games/types/get-games-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

export namespace GameSuggestionsActions {
  export const getGameSuggestions = createAction(
    GameDetailsActionTypes.GET_GAME_SUGGESTIONS,
    props<{ gameId: number }>()
  );

  export const getGameSuggestionsSuccess = createAction(
    GameDetailsActionTypes.GET_GAME_SUGGESTIONS_SUCCESS,
    props<{ getGamesResponse: GetGamesResponseInterface }>()
  );

  export const getGameSuggestionsFailure = createAction(
    GameDetailsActionTypes.GET_GAME_SUGGESTIONS_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );

  export const getGameSuggestionsNextPage = createAction(
    GameDetailsActionTypes.GET_GAME_SUGGESTIONS_NEXT_PAGE,
    props<{ url: string }>()
  );

  export const getGameSuggestionsNextPageSuccess = createAction(
    GameDetailsActionTypes.GET_GAME_SUGGESTIONS_NEXT_PAGE_SUCCESS,
    props<{ getGamesResponse: GetGamesResponseInterface }>()
  );

  export const getGameSuggestionsNextPageFailure = createAction(
    GameDetailsActionTypes.GET_GAME_SUGGESTIONS_NEXT_PAGE_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );
}
