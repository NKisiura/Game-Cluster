import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PlatformsStateInterface } from '../types/platforms-state.interface';
import { platformsFeatureKey } from '../types/platforms-feature-key';

const platformsFeatureSelector =
  createFeatureSelector<PlatformsStateInterface>(platformsFeatureKey);

export namespace PlatformsSelectors {
  export const platformsLoadingSelector = createSelector(
    platformsFeatureSelector,
    (platformsStateInterface: PlatformsStateInterface) =>
      platformsStateInterface.isLoading
  );

  export const platformsErrorSelector = createSelector(
    platformsFeatureSelector,
    (platformsStateInterface: PlatformsStateInterface) =>
      platformsStateInterface.error
  );

  export const platformsListSelector = createSelector(
    platformsFeatureSelector,
    (platformsStateInterface: PlatformsStateInterface) =>
      platformsStateInterface.data?.results || null
  );

  export const platformsNextPageSelector = createSelector(
    platformsFeatureSelector,
    (platformsStateInterface: PlatformsStateInterface) =>
      platformsStateInterface.data?.next || null
  );
}
