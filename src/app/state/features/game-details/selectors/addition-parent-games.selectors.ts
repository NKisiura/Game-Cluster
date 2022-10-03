import { createSelector } from '@ngrx/store';
import { gameDetailsFeatureSelector } from './game-details-feature.selector';
import { GameDetailsStateInterface } from '../types/game-details-state.interface';

export namespace AdditionParentGamesSelectors {
  export const additionParentGamesLoadingSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.additionParentGames.isLoading
  );

  export const additionParentGamesErrorSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.additionParentGames.error
  );

  export const additionParentGamesSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.additionParentGames.data?.results || null
  );
}
