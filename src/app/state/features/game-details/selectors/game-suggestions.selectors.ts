import { createSelector } from '@ngrx/store';
import { gameDetailsFeatureSelector } from './game-details-feature.selector';
import { GameDetailsStateInterface } from '../types/game-details-state.interface';

export namespace GameSuggestionsSelectors {
  export const gameSuggestionsLoadingSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameSuggestions.isLoading
  );

  export const gameSuggestionsErrorSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameSuggestions.error
  );

  export const gameSuggestionsSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameSuggestions.data?.results || null
  );

  export const gameSuggestionsNextPageSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameSuggestions.data?.next || null
  );
}
