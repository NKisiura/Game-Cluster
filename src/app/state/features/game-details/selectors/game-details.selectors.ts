import { createFeatureSelector, createSelector } from '@ngrx/store';
import { gameDetailsFeatureKey } from '../types/game-details-feature-key';
import { GameDetailsStateInterface } from '../types/game-details-state.interface';

const gameDetailsFeatureSelector =
  createFeatureSelector<GameDetailsStateInterface>(gameDetailsFeatureKey);

export namespace GameDetailsSelectors {
  export const gameDetailsSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.data || null
  );

  export const gameDetailsErrorSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) => gameDetailsState.error
  );

  export const gameDetailsLoadingSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) => gameDetailsState.isLoading
  );
}
