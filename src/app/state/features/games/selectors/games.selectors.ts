import { createFeatureSelector, createSelector } from '@ngrx/store';
import { gamesFeatureKey } from '../types/games-feature-key';
import { GamesStateInterface } from '../types/games-state.interface';

const gamesFeatureSelector =
  createFeatureSelector<GamesStateInterface>(gamesFeatureKey);

export namespace GamesSelectors {
  export const gamesErrorSelector = createSelector(
    gamesFeatureSelector,
    (gamesState: GamesStateInterface) => gamesState.error
  );

  export const gamesListSelector = createSelector(
    gamesFeatureSelector,
    (gamesState: GamesStateInterface) => gamesState.data?.results || null
  );

  export const gamesNextPageSelector = createSelector(
    gamesFeatureSelector,
    (gamesState: GamesStateInterface) => gamesState.data?.next || null
  );
}
