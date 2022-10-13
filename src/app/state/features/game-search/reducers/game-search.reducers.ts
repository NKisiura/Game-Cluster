import { GameSearchStateInterface } from '../types/game-search-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { GameSearchActions } from '../actions/game-search.actions';

const initialState: GameSearchStateInterface = {
  isLoading: false,
  data: null,
  error: null,
};

export const gameSearchReducer = createReducer(
  initialState,
  on(
    GameSearchActions.searchGame,
    (state): GameSearchStateInterface => ({
      ...state,
      isLoading: true,
      data: null,
      error: null,
    })
  ),
  on(
    GameSearchActions.searchGameSuccess,
    (state, action): GameSearchStateInterface => ({
      ...state,
      isLoading: false,
      data: action.getGamesResponse,
    })
  ),
  on(
    GameSearchActions.searchGameFailure,
    (state, action): GameSearchStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error,
    })
  )
);

export function gameSearchReducers(
  state: GameSearchStateInterface,
  action: Action
) {
  return gameSearchReducer(state, action);
}
