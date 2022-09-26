import { GamesStateInterface } from '../types/games-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { GamesActions } from '../actions/games.actions';

const initialState: GamesStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const gamesReducer = createReducer(
  initialState,
  on(
    GamesActions.getGames,
    (state): GamesStateInterface => ({
      ...state,
      isLoading: true,
      data: null,
      error: null,
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
    (state, action): GamesStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error,
    })
  ),
  on(
    GamesActions.getGamesNextPage,
    (state): GamesStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    GamesActions.getGamesNextPageSuccess,
    (state, action): GamesStateInterface => ({
      ...state,
      isLoading: false,
      data: {
        ...action.getNextPageResponse,
        results: [
          ...(state.data!.results || []),
          ...(action.getNextPageResponse.results || []),
        ],
      },
    })
  ),
  on(GamesActions.getGamesNextPageFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error,
  }))
);

export function gamesReducers(state: GamesStateInterface, action: Action) {
  return gamesReducer(state, action);
}
