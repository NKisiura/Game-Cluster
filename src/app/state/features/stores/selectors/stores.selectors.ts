import { createFeatureSelector, createSelector } from '@ngrx/store';
import { storesFeatureKey } from '../types/stores-feature-key';
import { StoresStateInterface } from '../types/stores-state.interface';

const storesFeatureSelector =
  createFeatureSelector<StoresStateInterface>(storesFeatureKey);

export namespace StoresSelectors {
  export const storesLoadingSelector = createSelector(
    storesFeatureSelector,
    (storesState: StoresStateInterface) => storesState.isLoading
  );

  export const storesErrorSelector = createSelector(
    storesFeatureSelector,
    (storesState: StoresStateInterface) => storesState.error
  );

  export const storesListSelector = createSelector(
    storesFeatureSelector,
    (storesState: StoresStateInterface) => storesState.data?.results || null
  );

  export const storesNextPageSelector = createSelector(
    storesFeatureSelector,
    (storesState: StoresStateInterface) => storesState.data?.next || null
  );
}
