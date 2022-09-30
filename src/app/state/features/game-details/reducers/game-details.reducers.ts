import { GameDetailsStateInterface } from '../types/game-details-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { GameDetailsActions } from '../actions/game-details.actions';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState: GameDetailsStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const gameDetailsReducer = createReducer(
  initialState,
  on(
    GameDetailsActions.getGameDetails,
    (state): GameDetailsStateInterface => ({
      ...state,
      isLoading: true,
      data: null,
      error: null,
    })
  ),
  on(
    GameDetailsActions.getGameDetailsSuccess,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.gameDetails,
    })
  ),
  on(
    GameDetailsActions.getGamesDetailsFailure,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error,
    })
  ),
  on(routerNavigationAction, (state, action) =>
    state.data &&
    action.payload.routerState.url.toString().includes(state.data.slug)
      ? state
      : initialState
  )
);

export function gameDetailsReducers(
  state: GameDetailsStateInterface,
  action: Action
) {
  return gameDetailsReducer(state, action);
}
