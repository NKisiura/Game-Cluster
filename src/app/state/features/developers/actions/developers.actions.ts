import { createAction, props } from '@ngrx/store';
import { DevelopersActionTypes } from './developers-action-types';
import { GetDevelopersResponseInterface } from '../types/get-developers-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

export namespace DevelopersActions {
  export const getDevelopers = createAction(
    DevelopersActionTypes.GET_DEVELOPERS,
    props<{ url: string }>()
  );

  export const getDevelopersSuccess = createAction(
    DevelopersActionTypes.GET_DEVELOPERS_SUCCESS,
    props<{ getDevelopersResponse: GetDevelopersResponseInterface }>()
  );

  export const getDevelopersFailure = createAction(
    DevelopersActionTypes.GET_DEVELOPERS_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );
}
