import { createAction, props } from '@ngrx/store';
import { CreatorsActionTypes } from './creators-action-types';
import { GetCreatorsResponseInterface } from '../types/get-creators-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

export namespace CreatorsActions {
  export const getCreators = createAction(
    CreatorsActionTypes.GET_CREATORS,
    props<{ url: string }>()
  );

  export const getCreatorsSuccess = createAction(
    CreatorsActionTypes.GET_CREATORS_SUCCESS,
    props<{ getCreatorsResponse: GetCreatorsResponseInterface }>()
  );

  export const getCreatorsFailure = createAction(
    CreatorsActionTypes.GET_CREATORS_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );

  export const getCreatorsNextPage = createAction(
    CreatorsActionTypes.GET_CREATORS_NEXT_PAGE,
    props<{ url: string }>()
  );

  export const getCreatorsNextPageSuccess = createAction(
    CreatorsActionTypes.GET_CREATORS_NEXT_PAGE_SUCCESS,
    props<{ getCreatorsResponse: GetCreatorsResponseInterface }>()
  );

  export const getCreatorsNextPageFailure = createAction(
    CreatorsActionTypes.GET_CREATORS_NEXT_PAGE_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );
}
