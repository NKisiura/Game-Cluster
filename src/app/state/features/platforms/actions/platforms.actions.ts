import { createAction, props } from '@ngrx/store';
import { PlatformsActionTypes } from './platforms-action-types';
import { GetPlatformsResponseInterface } from '../types/get-platforms-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

export namespace PlatformsActions {
  export const getPlatforms = createAction(
    PlatformsActionTypes.GET_PLATFORMS,
    props<{ url: string }>()
  );

  export const getPlatformsSuccess = createAction(
    PlatformsActionTypes.GET_PLATFORMS_SUCCESS,
    props<{ getPlatformsResponse: GetPlatformsResponseInterface }>()
  );

  export const getPlatformsFailure = createAction(
    PlatformsActionTypes.GET_PLATFORMS_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );

  export const getPlatformsNextPage = createAction(
    PlatformsActionTypes.GET_PLATFORMS_NEXT_PAGE,
    props<{ url: string }>()
  );

  export const getPlatformsNextPageSuccess = createAction(
    PlatformsActionTypes.GET_PLATFORMS_NEXT_PAGE_SUCCESS,
    props<{ getPlatformsResponse: GetPlatformsResponseInterface }>()
  );

  export const getPlatformsNextPageFailure = createAction(
    PlatformsActionTypes.GET_PLATFORMS_NEXT_PAGE_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );
}
