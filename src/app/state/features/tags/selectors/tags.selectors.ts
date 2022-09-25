import { createFeatureSelector, createSelector } from '@ngrx/store';
import { tagsFeatureKey } from '../types/tags-feature-key';
import { TagsStateInterface } from '../types/tags-state.interface';

const tagsFeatureSelector =
  createFeatureSelector<TagsStateInterface>(tagsFeatureKey);

export namespace TagsSelectors {
  export const tagsLoadingSelector = createSelector(
    tagsFeatureSelector,
    (tagsState: TagsStateInterface) => tagsState.isLoading
  );

  export const tagsErrorSelector = createSelector(
    tagsFeatureSelector,
    (tagsState: TagsStateInterface) => tagsState.error
  );

  export const tagsListSelector = createSelector(
    tagsFeatureSelector,
    (tagsState: TagsStateInterface) => tagsState.data?.previous || null
  );

  export const tagsNextPageSelector = createSelector(
    tagsFeatureSelector,
    (tagsState: TagsStateInterface) => tagsState.data?.next || null
  );

  export const tagsViewModalSelector = createSelector(
    tagsFeatureSelector,
    (tagsState: TagsStateInterface) => ({
      isLoading: tagsState.isLoading,
      error: tagsState.error,
      list: tagsState.data?.results || null,
      count: tagsState.data?.count || null,
      nextPage: tagsState.data?.next || null,
      prevPage: tagsState.data?.previous || null,
    })
  );
}
