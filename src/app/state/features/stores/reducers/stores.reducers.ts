import { StoresStateInterface } from '../types/stores-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { StoresActions } from '../actions/stores.actions';

const initialState: StoresStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const storesReducer = createReducer(
  initialState,
  on(
    StoresActions.getStores,
    (state): StoresStateInterface => ({
      ...state,
      isLoading: true,
      error: null,
    })
  ),
  on(
    StoresActions.getStoresSuccess,
    (state, action): StoresStateInterface => ({
      ...state,
      isLoading: false,
      data: action.getStoresResponse,
    })
  ),
  on(
    StoresActions.getStoreFailure,
    (state, action): StoresStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error,
    })
  ),
  on(
    StoresActions.getStoresNextPage,
    (state): StoresStateInterface => ({
      ...state,
      isLoading: true,
      error: null,
    })
  ),
  on(
    StoresActions.getStoresNextPageSuccess,
    (state, action): StoresStateInterface => ({
      ...state,
      isLoading: false,
      data: {
        ...action.getStoresResponse,
        results: [
          ...(state.data!.results || []),
          ...(action.getStoresResponse.results || []),
        ],
      },
    })
  ),
  on(
    StoresActions.getStoresNextPageFailure,
    (state, action): StoresStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error,
    })
  )
);

export function storesReducers(state: StoresStateInterface, action: Action) {
  return storesReducer(state, action);
}
