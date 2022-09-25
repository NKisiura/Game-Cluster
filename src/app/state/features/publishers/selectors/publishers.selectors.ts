import { createFeatureSelector, createSelector } from '@ngrx/store';
import { publishersFeatureKey } from '../types/publishers-feature-key';
import { PublishersStateInterface } from '../types/publishers-state.interface';

const publishersFeatureSelector =
  createFeatureSelector<PublishersStateInterface>(publishersFeatureKey);

export namespace PublishersSelectors {
  export const publishersLoadingSelector = createSelector(
    publishersFeatureSelector,
    (publishersState: PublishersStateInterface) => publishersState.isLoading
  );

  export const publishersErrorSelector = createSelector(
    publishersFeatureSelector,
    (publishersState: PublishersStateInterface) => publishersState.error
  );

  export const publishersListSelector = createSelector(
    publishersFeatureSelector,
    (publishersState: PublishersStateInterface) =>
      publishersState.data?.results || null
  );

  export const publishersNextPageSelector = createSelector(
    publishersFeatureSelector,
    (publishersState: PublishersStateInterface) =>
      publishersState.data?.next || null
  );

  export const publishersViewModelSelector = createSelector(
    publishersFeatureSelector,
    (publishersState: PublishersStateInterface) => ({
      isLoading: publishersState.isLoading,
      error: publishersState.error,
      list: publishersState.data?.results || null,
      count: publishersState.data?.count || null,
      nextPage: publishersState.data?.next || null,
      prevPage: publishersState.data?.previous || null,
    })
  );
}
