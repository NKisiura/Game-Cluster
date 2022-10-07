import { createSelector } from '@ngrx/store';
import { gameDetailsFeatureSelector } from './game-details-feature.selector';
import { GameDetailsStateInterface } from '../types/game-details-state.interface';

export namespace GameAdditionsSelectors {
  export const gameAdditionsLoadingSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameAdditions.isLoading
  );

  export const gameAdditionsErrorSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameAdditions.error
  );

  export const gameAdditionsSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameAdditions.data?.results || null
  );

  export const gameAdditionsNextPageSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameAdditions.data?.next || null
  );
}
