import { TagsStateInterface } from '../types/tags-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { TagsActions } from '../actions/tags.actions';

const initialState: TagsStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const tagsReducer = createReducer(
  initialState,
  on(
    TagsActions.getTags,
    (state): TagsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    TagsActions.getTagsSuccess,
    (state, action): TagsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.getTagsResponse,
    })
  ),
  on(
    TagsActions.getTagsFailure,
    (state, action): TagsStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error,
    })
  )
);

export function tagsReducers(state: TagsStateInterface, action: Action) {
  return tagsReducer(state, action);
}
