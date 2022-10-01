import { GameDetailsStateInterface } from '../types/game-details-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { GameDetailsActions } from '../actions/game-details.actions';
import { routerNavigationAction } from '@ngrx/router-store';
import { GameScreenshotsActions } from '../actions/game-screenshots.actions';
import { GameAchievementsActions } from '../actions/game-achievements.actions';

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
  gameAchievements: {
    isLoading: false,
    error: null,
    data: null,
  },
};

export const gameDetailsReducer = createReducer(
  initialState,
  on(
    GameDetailsActions.getGame,
    (state): GameDetailsStateInterface => ({
      ...state,
      game: {
        ...state.game,
        isLoading: true,
      },
    })
  ),
  on(
    GameDetailsActions.getGameSuccess,
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
    GameDetailsActions.getGameFailure,
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
    GameScreenshotsActions.getGameScreenshots,
    (state): GameDetailsStateInterface => ({
      ...state,
      gameScreenshots: {
        ...state.gameScreenshots,
        isLoading: true,
      },
    })
  ),
  on(
    GameScreenshotsActions.getGameScreenshotsSuccess,
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
    GameScreenshotsActions.getGameScreenshotsFailure,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gameScreenshots: {
        ...state.gameScreenshots,
        isLoading: false,
        error: action.error,
      },
    })
  ),
  on(
    GameAchievementsActions.getGameAchievements,
    (state): GameDetailsStateInterface => ({
      ...state,
      gameAchievements: {
        ...state.gameAchievements,
        isLoading: true,
      },
    })
  ),
  on(
    GameAchievementsActions.getGameAchievementsSuccess,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gameAchievements: {
        ...state.gameAchievements,
        isLoading: false,
        data: action.getAchievementsResponse,
      },
    })
  ),
  on(
    GameAchievementsActions.getGameAchievementsFailure,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gameAchievements: {
        ...state.gameAchievements,
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
