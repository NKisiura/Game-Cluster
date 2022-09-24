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
}
