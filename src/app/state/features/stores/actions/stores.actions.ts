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
}
