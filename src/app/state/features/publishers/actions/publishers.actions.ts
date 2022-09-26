import { createAction, props } from '@ngrx/store';
import { PublishersActionTypes } from './publishers-action-types';
import { GetPublishersResponseInterface } from '../types/get-publishers-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

export namespace PublishersActions {
  export const getPublishers = createAction(
    PublishersActionTypes.GET_PUBLISHERS,
    props<{ url: string }>()
  );

  export const getPublishersSuccess = createAction(
    PublishersActionTypes.GET_PUBLISHERS_SUCCESS,
    props<{ getPublishersResponse: GetPublishersResponseInterface }>()
  );

  export const getPublishersFailure = createAction(
    PublishersActionTypes.GET_PUBLISHERS_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );

  export const getPublishersNextPage = createAction(
    PublishersActionTypes.GET_PUBLISHERS_NEXT_PAGE,
    props<{ url: string }>()
  );

  export const getPublishersNextPageSuccess = createAction(
    PublishersActionTypes.GET_PUBLISHERS_NEXT_PAGE_SUCCESS,
    props<{ getPublishersResponse: GetPublishersResponseInterface }>()
  );

  export const getPublishersNextPageFailure = createAction(
    PublishersActionTypes.GET_PUBLISHERS_NEXT_PAGE_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );
}
