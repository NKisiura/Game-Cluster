import { createFeatureSelector, createSelector } from '@ngrx/store';
import { developersFeatureKey } from '../types/developers-feature-key';
import { DevelopersStateInterface } from '../types/developers-state.interface';

export const developersFeatureSelector =
  createFeatureSelector<DevelopersStateInterface>(developersFeatureKey);

export namespace DevelopersSelectors {
  export const developersLoadingSelector = createSelector(
    developersFeatureSelector,
    (developersState: DevelopersStateInterface) => developersState.isLoading
  );

  export const developersErrorSelector = createSelector(
    developersFeatureSelector,
    (developersState: DevelopersStateInterface) => developersState.error
  );

  export const developersListSelector = createSelector(
    developersFeatureSelector,
    (developersState: DevelopersStateInterface) =>
      developersState.data?.results || null
  );

  export const developersNextPageSelector = createSelector(
    developersFeatureSelector,
    (developersState: DevelopersStateInterface) =>
      developersState.data?.next || null
  );
}
