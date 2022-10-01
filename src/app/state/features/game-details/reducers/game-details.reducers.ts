import { GameDetailsStateInterface } from '../types/game-details-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { GameDetailsActions } from '../actions/game-details.actions';
import { routerNavigationAction } from '@ngrx/router-store';

const initialState: GameDetailsStateInterface = {
  game: {
    isLoading: false,
    error: null,
    data: null,
  },
  gameScreenshots: {
    isLoading: false,
    error: null,
    data: null,
  },
};

export const gameDetailsReducer = createReducer(
  initialState,
  on(
    GameDetailsActions.GetGameActions.getGame,
    (state): GameDetailsStateInterface => ({
      ...state,
      game: {
        ...state.game,
        isLoading: true,
      },
    })
  ),
  on(
    GameDetailsActions.GetGameActions.getGameSuccess,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      game: {
        ...state.game,
        isLoading: false,
        data: action.game,
      },
    })
  ),
  on(
    GameDetailsActions.GetGameActions.getGameFailure,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      game: {
        ...state.game,
        isLoading: false,
        error: action.error,
      },
    })
  ),
  on(
    GameDetailsActions.GetScreenshotsActions.getGameScreenshots,
    (state): GameDetailsStateInterface => ({
      ...state,
      gameScreenshots: {
        ...state.gameScreenshots,
        isLoading: true,
      },
    })
  ),
  on(
    GameDetailsActions.GetScreenshotsActions.getGameScreenshotsSuccess,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gameScreenshots: {
        ...state.gameScreenshots,
        isLoading: false,
        data: action.getScreenshotsResponse,
      },
    })
  ),
  on(
    GameDetailsActions.GetScreenshotsActions.getGameScreenshotsFailure,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gameScreenshots: {
        ...state.gameScreenshots,
        isLoading: false,
        error: action.error,
      },
    })
  ),
  on(routerNavigationAction, (state, action) =>
    state.game.data &&
    action.payload.routerState.url.toString().includes(state.game.data.slug)
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
