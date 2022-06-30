import { createAction, props } from '@ngrx/store';
import { PlatformsActionTypes } from './platforms-action-types';
import { GetPlatformsResponseInterface } from '../types/get-platforms-response.interface';

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
    PlatformsActionTypes.GET_PLATFORMS_FAILURE
  );
}
