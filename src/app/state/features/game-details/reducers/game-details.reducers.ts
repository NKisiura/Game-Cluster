import { GameDetailsStateInterface } from '../types/game-details-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { GameDetailsActions } from '../actions/game-details.actions';

const initialState: GameDetailsStateInterface = {
  isLoading: false,
  error: false,
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
      error: false,
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
    (state): GameDetailsStateInterface => ({
      ...state,
      isLoading: false,
      error: true,
    })
  )
);

export function gameDetailsReducers(
  state: GameDetailsStateInterface,
  action: Action
) {
  return gameDetailsReducer(state, action);
}
