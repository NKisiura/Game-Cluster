import { createAction, props } from '@ngrx/store';
import { StoresActionTypes } from './stores-action-types';
import { GetStoresResponseInterface } from '../types/get-stores-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

export namespace StoresActions {
  export const getStores = createAction(
    StoresActionTypes.GET_STORES,
    props<{ url: string }>()
  );

  export const getStoresSuccess = createAction(
    StoresActionTypes.GET_STORES_SUCCESS,
    props<{ getStoresResponse: GetStoresResponseInterface }>()
  );

  export const getStoreFailure = createAction(
    StoresActionTypes.GET_STORES_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );

  export const getStoresNextPage = createAction(
    StoresActionTypes.GET_STORES_NEXT_PAGE,
    props<{ url: string }>()
  );

  export const getStoresNextPageSuccess = createAction(
    StoresActionTypes.GET_STORES_NEXT_PAGE_SUCCESS,
    props<{ getStoresResponse: GetStoresResponseInterface }>()
  );

  export const getStoresNextPageFailure = createAction(
    StoresActionTypes.GET_STORES_NEXT_PAGE_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );
}
