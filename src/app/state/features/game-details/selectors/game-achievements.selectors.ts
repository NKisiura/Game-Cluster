import { createSelector } from '@ngrx/store';
import { GameDetailsStateInterface } from '../types/game-details-state.interface';
import { gameDetailsFeatureSelector } from './game-details-feature.selector';

export namespace GameAchievementsSelectors {
  export const gameAchievementsLoadingSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameAchievements.isLoading
  );

  export const gameAchievementsErrorSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameAchievements.error
  );

  export const gameAchievementsSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameAchievements.data?.results || null
  );

  export const gameAchievementsCountSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameAchievements.data?.count || null
  );

  export const gameAchievementsNextPageSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameAchievements.data?.next || null
  );
}
