import { PublishersStateInterface } from '../types/publishers-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { PublishersActions } from '../actions/publishers.actions';

const initialState: PublishersStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const publishersReducer = createReducer(
  initialState,
  on(
    PublishersActions.getPublishers,
    (state): PublishersStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    PublishersActions.getPublishersSuccess,
    (state, action): PublishersStateInterface => ({
      ...state,
      isLoading: false,
      data: action.getPublishersResponse,
    })
  ),
  on(
    PublishersActions.getPublishersFailure,
    (state, action): PublishersStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error,
    })
  ),
  on(
    PublishersActions.getPublishersNextPage,
    (state): PublishersStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    PublishersActions.getPublishersNextPageSuccess,
    (state, action): PublishersStateInterface => ({
      ...state,
      isLoading: false,
      data: {
        ...action.getPublishersResponse,
        results: [
          ...(state.data!.results || []),
          ...(action.getPublishersResponse.results || []),
        ],
      },
    })
  ),
  on(
    PublishersActions.getPublishersNextPageFailure,
    (state, action): PublishersStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error,
    })
  )
);

export function publishersReducers(
  state: PublishersStateInterface,
  action: Action
) {
  return publishersReducer(state, action);
}
