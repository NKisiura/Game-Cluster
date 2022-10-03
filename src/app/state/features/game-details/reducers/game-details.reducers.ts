import { GameDetailsStateInterface } from '../types/game-details-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { GameDetailsActions } from '../actions/game-details.actions';
import { routerNavigationAction } from '@ngrx/router-store';
import { GameScreenshotsActions } from '../actions/game-screenshots.actions';
import { GameAchievementsActions } from '../actions/game-achievements.actions';
import { GameSeriesActions } from '../actions/game-series.actions';
import { GameAdditionsActions } from '../actions/game-additions.actions';
import { AdditionParentGamesActions } from '../actions/addition-parent-games.actions';

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
  gameSeries: {
    isLoading: false,
    error: null,
    data: null,
  },
  gameAdditions: {
    isLoading: false,
    error: null,
    data: null,
  },
  additionParentGames: {
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
  on(
    GameSeriesActions.getGameSeries,
    (state): GameDetailsStateInterface => ({
      ...state,
      gameSeries: {
        ...state.gameSeries,
        isLoading: true,
      },
    })
  ),
  on(
    GameSeriesActions.getGameSeriesSuccess,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gameSeries: {
        ...state.gameSeries,
        isLoading: false,
        data: action.getGamesResponse,
      },
    })
  ),
  on(
    GameSeriesActions.getGameSeriesFailure,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gameSeries: {
        ...state.gameSeries,
        isLoading: false,
        error: action.error,
      },
    })
  ),
  on(
    GameAdditionsActions.getGameAdditions,
    (state): GameDetailsStateInterface => ({
      ...state,
      gameAdditions: {
        ...state.gameAdditions,
        isLoading: true,
      },
    })
  ),
  on(
    GameAdditionsActions.getGameAdditionsSuccess,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gameAdditions: {
        ...state.gameAdditions,
        isLoading: false,
        data: action.getGamesResponse,
      },
    })
  ),
  on(
    GameAdditionsActions.getGameAdditionsFailure,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gameAdditions: {
        ...state.gameAdditions,
        isLoading: false,
        error: action.error,
      },
    })
  ),
  on(
    AdditionParentGamesActions.getAdditionParentGames,
    (state): GameDetailsStateInterface => ({
      ...state,
      additionParentGames: {
        ...state.additionParentGames,
        isLoading: true,
      },
    })
  ),
  on(
    AdditionParentGamesActions.getAdditionParentGamesSuccess,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      additionParentGames: {
        ...state.additionParentGames,
        isLoading: false,
        data: action.getGamesResponse,
      },
    })
  ),
  on(
    AdditionParentGamesActions.getAdditionParentGamesFailure,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      additionParentGames: {
        ...state.additionParentGames,
        isLoading: false,
        error: action.error,
      },
    })
  ),
  on(routerNavigationAction, (state, action) => {
    if (
      state.game.data &&
      action.payload.routerState.root.firstChild?.params['game-slug'] ===
        state.game.data.slug
    ) {
      return state;
    } else {
      return initialState;
    }
  })
);

export function gameDetailsReducers(
  state: GameDetailsStateInterface,
  action: Action
) {
  return gameDetailsReducer(state, action);
}
