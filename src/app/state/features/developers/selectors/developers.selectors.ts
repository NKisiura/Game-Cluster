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

  export const developersViewModelSelector = createSelector(
    developersFeatureSelector,
    (developersState: DevelopersStateInterface) => ({
      isLoading: developersState.isLoading,
      error: developersState.error,
      list: developersState.data?.results || null,
      count: developersState.data?.count || null,
      nextPage: developersState.data?.next || null,
      prevPage: developersState.data?.previous || null,
    })
  );
}
