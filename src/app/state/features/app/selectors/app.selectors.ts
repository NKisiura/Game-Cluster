import { createFeatureSelector, createSelector } from '@ngrx/store';
import { appFeatureKey } from '../types/app-feature-key';
import { AppStateInterface } from '../types/app-state.interface';

export const appFeatureSelector =
  createFeatureSelector<AppStateInterface>(appFeatureKey);

export namespace AppSelectors {
  export const totalGamesCount = createSelector(
    appFeatureSelector,
    (appState: AppStateInterface) => appState.totalGamesCount.data
  );
}
