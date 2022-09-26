import { createAction, props } from '@ngrx/store';
import { TagsActionTypes } from './tags-action-types';
import { GetTagsResponseInterface } from '../types/get-tags-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

export namespace TagsActions {
  export const getTags = createAction(
    TagsActionTypes.GET_TAGS,
    props<{ url: string }>()
  );

  export const getTagsSuccess = createAction(
    TagsActionTypes.GET_TAGS_SUCCESS,
    props<{ getTagsResponse: GetTagsResponseInterface }>()
  );

  export const getTagsFailure = createAction(
    TagsActionTypes.GET_TAGS_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );

  export const getTagsNextPage = createAction(
    TagsActionTypes.GET_TAGS_NEXT_PAGE,
    props<{ url: string }>()
  );

  export const getTagsNextPageSuccess = createAction(
    TagsActionTypes.GET_TAGS_NEXT_PAGE_SUCCESS,
    props<{ getTagsResponse: GetTagsResponseInterface }>()
  );

  export const getTagsNextPageFailure = createAction(
    TagsActionTypes.GET_TAGS_NEXT_PAGE_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );
}
