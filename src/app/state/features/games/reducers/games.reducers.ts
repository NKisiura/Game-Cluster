import { GamesStateInterface } from '../types/games-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { GamesActions } from '../actions/games.actions';

const initialState: GamesStateInterface = {
  isLoading: false,
  error: false,
  data: null,
};

export const gamesReducer = createReducer(
  initialState,
  on(
    GamesActions.getGames,
    (state): GamesStateInterface => ({
      ...state,
      isLoading: true,
      error: false,
    })
  ),
  on(
    GamesActions.getGamesSuccess,
    (state, action): GamesStateInterface => ({
      ...state,
      isLoading: false,
      data: action.getGamesResponse,
    })
  ),
  on(
    GamesActions.getGamesFailure,
    (state): GamesStateInterface => ({
      ...state,
      isLoading: false,
      error: true,
    })
  )
);

export function gamesReducers(state: GamesStateInterface, action: Action) {
  return gamesReducer(state, action);
}
