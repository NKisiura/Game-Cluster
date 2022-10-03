import { createSelector } from '@ngrx/store';
import { gameDetailsFeatureSelector } from './game-details-feature.selector';
import { GameDetailsStateInterface } from '../types/game-details-state.interface';

export namespace GameSeriesSelectors {
  export const gameSeriesLoadingSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameSeries.isLoading
  );

  export const gameSeriesErrorSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameSeries.error
  );

  export const gameSeriesSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameSeries.data?.results || null
  );

  export const gameSeriesNextPageSelector = createSelector(
    gameDetailsFeatureSelector,
    (gameDetailsState: GameDetailsStateInterface) =>
      gameDetailsState.gameSeries.data?.next || null
  );
}
