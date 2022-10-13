import { createFeatureSelector, createSelector } from '@ngrx/store';
import { gameSearchFeatureKey } from '../types/game-search-feature-key';
import { GameSearchStateInterface } from '../types/game-search-state.interface';

export const gameSearchFeatureSelector =
  createFeatureSelector<GameSearchStateInterface>(gameSearchFeatureKey);

export namespace GameSearchSelectors {
  export const gameSearchLoadingSelector = createSelector(
    gameSearchFeatureSelector,
    (gameSearchState: GameSearchStateInterface) => gameSearchState.isLoading
  );

  export const gameSearchErrorSelector = createSelector(
    gameSearchFeatureSelector,
    (gameSearchState: GameSearchStateInterface) => gameSearchState.error
  );

  export const gameSearchResultSelector = createSelector(
    gameSearchFeatureSelector,
    (gameSearchState: GameSearchStateInterface) =>
      gameSearchState.data?.results || null
  );

  export const gameSearchResultCount = createSelector(
    gameSearchFeatureSelector,
    (gameSearchState: GameSearchStateInterface) =>
      gameSearchState.data?.count || null
  );
}
