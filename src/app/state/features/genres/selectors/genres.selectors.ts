import { createFeatureSelector, createSelector } from '@ngrx/store';
import { genresFeatureKey } from '../types/genres-feature-key';
import { GenresStateInterface } from '../types/genres-state.interface';

const genresFeatureSelector =
  createFeatureSelector<GenresStateInterface>(genresFeatureKey);

export namespace GenresSelectors {
  export const genresLoadingSelector = createSelector(
    genresFeatureSelector,
    (genresState: GenresStateInterface) => genresState.isLoading
  );

  export const genresErrorSelector = createSelector(
    genresFeatureSelector,
    (genresState: GenresStateInterface) => genresState.error
  );

  export const genresListSelector = createSelector(
    genresFeatureSelector,
    (genresState: GenresStateInterface) => genresState.data?.results || null
  );

  export const genresNextPageSelector = createSelector(
    genresFeatureSelector,
    (genresState: GenresStateInterface) => genresState.data?.next || null
  );

  export const genresViewModelSelector = createSelector(
    genresFeatureSelector,
    (genresState: GenresStateInterface) => ({
      isLoading: genresState.isLoading,
      error: genresState.error,
      list: genresState.data?.results || null,
      count: genresState.data?.count || null,
      nextPage: genresState.data?.next || null,
      prevPage: genresState.data?.previous || null,
    })
  );
}
