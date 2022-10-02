import { createSelector } from '@ngrx/store';
import { GameDetailsStateInterface } from '../types/game-details-state.interface';
import { gameDetailsFeatureSelector } from './game-details-feature.selector';

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
      gameDetailsState.gameScreenshots.data?.results || null
  );

  export const gameScreenshotsNextPageSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameScreenshots.data?.next || null
  );
}
