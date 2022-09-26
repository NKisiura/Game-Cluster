import { createFeatureSelector, createSelector } from '@ngrx/store';
import { creatorsFeatureKey } from '../types/creators-feature-key';
import { CreatorsStateInterface } from '../types/creators-state.interface';

export const creatorsFeatureSelector =
  createFeatureSelector<CreatorsStateInterface>(creatorsFeatureKey);

export namespace CreatorsSelectors {
  export const creatorsLoadingSelector = createSelector(
    creatorsFeatureSelector,
    (creatorsState: CreatorsStateInterface) => creatorsState.isLoading
  );

  export const creatorsErrorSelector = createSelector(
    creatorsFeatureSelector,
    (creatorsState: CreatorsStateInterface) => creatorsState.error
  );

  export const creatorsListSelector = createSelector(
    creatorsFeatureSelector,
    (creatorsState: CreatorsStateInterface) =>
      creatorsState.data?.results || null
  );

  export const creatorsNextPageSelector = createSelector(
    creatorsFeatureSelector,
    (creatorsState: CreatorsStateInterface) => creatorsState.data?.next || null
  );

  export const creatorsViewModelSelector = createSelector(
    creatorsFeatureSelector,
    (creatorsState: CreatorsStateInterface) => ({
      isLoading: creatorsState.isLoading,
      error: creatorsState.error,
      list: creatorsState.data?.results || null,
      count: creatorsState.data?.count || null,
      nextPage: creatorsState.data?.next || null,
      prevPage: creatorsState.data?.previous || null,
    })
  );
}
