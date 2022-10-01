import { createSelector } from '@ngrx/store';
import { GameDetailsStateInterface } from '../types/game-details-state.interface';
import { gameDetailsFeatureSelector } from './game-details-feature.selector';

export namespace GameDetailsSelectors {
  export const gameSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.game.data || null
  );

  export const gameErrorSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) => gameDetailsState.game.error
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
