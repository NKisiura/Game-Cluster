import { GameDetailsStateInterface } from '../types/game-details-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { GameDetailsActions } from '../actions/game-details.actions';
import { routerNavigationAction } from '@ngrx/router-store';
import { GameScreenshotsActions } from '../actions/game-screenshots.actions';
import { GameAchievementsActions } from '../actions/game-achievements.actions';
import { GameSeriesActions } from '../actions/game-series.actions';
import { GameAdditionsActions } from '../actions/game-additions.actions';
import { AdditionParentGamesActions } from '../actions/addition-parent-games.actions';
import { GameSuggestionsActions } from '../actions/game-suggestions.actions';
import { GameVideosActions } from '../actions/game-videos.actions';
import { GamePostsActions } from '../actions/game-posts.actions';

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
  gameSuggestions: {
    isLoading: false,
    error: null,
    data: null,
  },
  gameVideos: {
    isLoading: false,
    error: null,
    data: null,
  },
  gamePosts: {
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
    GameScreenshotsActions.getGameScreenshotsNextPage,
    (state): GameDetailsStateInterface => ({
      ...state,
      gameScreenshots: {
        ...state.gameScreenshots,
        isLoading: true,
      },
    })
  ),
  on(
    GameScreenshotsActions.getGameScreenshotsNextPageSuccess,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gameScreenshots: {
        ...state.gameScreenshots,
        isLoading: false,
        data: {
          ...action.getScreenshotsResponse,
          results: [
            ...(state.gameScreenshots.data?.results || []),
            ...(action.getScreenshotsResponse.results || []),
          ],
        },
      },
    })
  ),
  on(
    GameScreenshotsActions.getGameScreenshotsNextPageFailure,
    (state, action) => ({
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
    GameAchievementsActions.getGameAchievementsNextPage,
    (state): GameDetailsStateInterface => ({
      ...state,
      gameAchievements: {
        ...state.gameAchievements,
        isLoading: true,
      },
    })
  ),
  on(
    GameAchievementsActions.getGameAchievementsNextPageSuccess,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gameAchievements: {
        ...state.gameAchievements,
        isLoading: false,
        data: {
          ...action.getAchievementsResponse,
          results: [
            ...(state.gameAchievements.data?.results || []),
            ...(action.getAchievementsResponse.results || []),
          ],
        },
      },
    })
  ),
  on(
    GameAchievementsActions.getGameAchievementsNextPageFailure,
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
    GameSuggestionsActions.getGameSuggestions,
    (state): GameDetailsStateInterface => ({
      ...state,
      gameSuggestions: {
        ...state.gameSuggestions,
        isLoading: true,
      },
    })
  ),
  on(
    GameSuggestionsActions.getGameSuggestionsSuccess,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gameSuggestions: {
        ...state.gameSuggestions,
        isLoading: false,
        data: action.getGamesResponse,
      },
    })
  ),
  on(
    GameSuggestionsActions.getGameSuggestionsFailure,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gameSuggestions: {
        ...state.gameSuggestions,
        isLoading: false,
        error: action.error,
      },
    })
  ),
  on(
    GameSuggestionsActions.getGameSuggestionsNextPage,
    (state): GameDetailsStateInterface => ({
      ...state,
      gameSuggestions: {
        ...state.gameSuggestions,
        isLoading: true,
      },
    })
  ),
  on(
    GameSuggestionsActions.getGameSuggestionsNextPageSuccess,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gameSuggestions: {
        ...state.gameSuggestions,
        isLoading: false,
        data: {
          ...action.getGamesResponse,
          results: [
            ...(state.gameSuggestions.data?.results || []),
            ...(action.getGamesResponse.results || []),
          ],
        },
      },
    })
  ),
  on(
    GameSuggestionsActions.getGameSuggestionsNextPageFailure,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gameSuggestions: {
        ...state.gameSuggestions,
        isLoading: false,
        error: action.error,
      },
    })
  ),
  on(
    GameVideosActions.getGameVideos,
    (state): GameDetailsStateInterface => ({
      ...state,
      gameVideos: {
        ...state.gameVideos,
        isLoading: true,
      },
    })
  ),
  on(
    GameVideosActions.getGameVideosSuccess,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gameVideos: {
        ...state.gameVideos,
        isLoading: false,
        data: action.getVideosResponse,
      },
    })
  ),
  on(
    GameVideosActions.getGameVideosFailure,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gameVideos: {
        ...state.gameVideos,
        isLoading: false,
        error: action.error,
      },
    })
  ),
  on(
    GameVideosActions.getGameVideosNextPage,
    (state): GameDetailsStateInterface => ({
      ...state,
      gameVideos: {
        ...state.gameVideos,
        isLoading: true,
      },
    })
  ),
  on(
    GameVideosActions.getGameVideosNextPageSuccess,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gameVideos: {
        ...state.gameVideos,
        isLoading: false,
        data: {
          ...action.getVideosResponse,
          results: [
            ...(state.gameVideos.data?.results || []),
            ...(action.getVideosResponse.results || []),
          ],
        },
      },
    })
  ),
  on(
    GameVideosActions.getGameVideosNextPageFailure,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gameVideos: {
        ...state.gameVideos,
        isLoading: false,
        error: action.error,
      },
    })
  ),
  on(
    GamePostsActions.getGamePosts,
    (state): GameDetailsStateInterface => ({
      ...state,
      gamePosts: {
        ...state.gamePosts,
        isLoading: true,
      },
    })
  ),
  on(
    GamePostsActions.getGamePostsSuccess,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gamePosts: {
        ...state.gamePosts,
        isLoading: false,
        data: action.getPostsResponse,
      },
    })
  ),
  on(
    GamePostsActions.getGamePostsFailure,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gamePosts: {
        ...state.gamePosts,
        isLoading: false,
        error: action.error,
      },
    })
  ),
  on(
    GamePostsActions.getGamePostsNextPage,
    (state): GameDetailsStateInterface => ({
      ...state,
      gamePosts: {
        ...state.gamePosts,
        isLoading: true,
      },
    })
  ),
  on(
    GamePostsActions.getGamePostsNextPageSuccess,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gamePosts: {
        ...state.gamePosts,
        isLoading: false,
        data: {
          ...action.getPostsResponse,
          results: [
            ...(state.gamePosts.data?.results || []),
            ...(action.getPostsResponse.results || []),
          ],
        },
      },
    })
  ),
  on(
    GamePostsActions.getGamePostsNextPageFailure,
    (state, action): GameDetailsStateInterface => ({
      ...state,
      gamePosts: {
        ...state.gamePosts,
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
