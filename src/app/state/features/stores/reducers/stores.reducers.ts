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
  )
);

export function storesReducers(state: StoresStateInterface, action: Action) {
  return storesReducer(state, action);
}
