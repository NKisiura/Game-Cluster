import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlatformsStateInterface } from '../types/platforms-state.interface';
import { platformsFeatureKey } from '../types/platforms-feature-key';

const platformsFeatureSelector =
  createFeatureSelector<PlatformsStateInterface>(platformsFeatureKey);

export namespace PlatformsSelectors {
  export const platformsLoadingSelector = createSelector(
    platformsFeatureSelector,
    (platformsState: PlatformsStateInterface) => platformsState.isLoading
  );

  export const platformsErrorSelector = createSelector(
    platformsFeatureSelector,
    (platformsState: PlatformsStateInterface) => platformsState.error
  );

  export const platformsListSelector = createSelector(
    platformsFeatureSelector,
    (platformsState: PlatformsStateInterface) =>
      platformsState.data?.results || null
  );

  export const platformsNextPageSelector = createSelector(
    platformsFeatureSelector,
    (platformsState: PlatformsStateInterface) =>
      platformsState.data?.next || null
  );
}
