import { createFeatureSelector, createSelector } from '@ngrx/store';
import { gameDetailsFeatureKey } from '../types/game-details-feature-key';
import { GameDetailsStateInterface } from '../types/game-details-state.interface';

const gameDetailsFeatureSelector =
  createFeatureSelector<GameDetailsStateInterface>(gameDetailsFeatureKey);

export namespace GameDetailsSelectors {
  export namespace GameSelectors {
    export const gameSelector = createSelector(
      gameDetailsFeatureSelector,
      (gameDetailsState: GameDetailsStateInterface) =>
        gameDetailsState.game.data || null
    );

    export const gameErrorSelector = createSelector(
      gameDetailsFeatureSelector,
      (gameDetailsState: GameDetailsStateInterface) =>
        gameDetailsState.game.error
    );

    export const gameLoadingSelector = createSelector(
      gameDetailsFeatureSelector,
      (gameDetailsState: GameDetailsStateInterface) =>
        gameDetailsState.game.isLoading
    );

    export const gameDetailsBgImageSelector = createSelector(
      gameDetailsFeatureSelector,
      (gameDetailsState: GameDetailsStateInterface) =>
        gameDetailsState.game.data?.background_image || null
    );
  }

  export namespace GameScreenshotsSelectors {
    export const gameScreenshotsLoadingSelector = createSelector(
      gameDetailsFeatureSelector,
      (gameDetailsState: GameDetailsStateInterface) =>
        gameDetailsState.gameScreenshots.isLoading
    );

    export const gameScreenshotsErrorSelector = createSelector(
      gameDetailsFeatureSelector,
      (gameDetailsState: GameDetailsStateInterface) =>
        gameDetailsState.gameScreenshots.error
    );

    export const gameScreenshotsSelector = createSelector(
      gameDetailsFeatureSelector,
      (gameDetailsState: GameDetailsStateInterface) =>
        gameDetailsState.gameScreenshots.data?.previous || null
    );
  }
}
