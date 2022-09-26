import { PlatformsStateInterface } from '../types/platforms-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { PlatformsActions } from '../actions/platforms.actions';

const initialState: PlatformsStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const platformsReducer = createReducer(
  initialState,
  on(
    PlatformsActions.getPlatforms,
    (state): PlatformsStateInterface => ({
      ...state,
      isLoading: true,
      error: null,
    })
  ),
  on(
    PlatformsActions.getPlatformsSuccess,
    (state, action): PlatformsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.getPlatformsResponse,
    })
  ),
  on(
    PlatformsActions.getPlatformsFailure,
    (state, action): PlatformsStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error,
    })
  ),
  on(
    PlatformsActions.getPlatformsNextPage,
    (state): PlatformsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    PlatformsActions.getPlatformsNextPageSuccess,
    (state, action): PlatformsStateInterface => ({
      ...state,
      isLoading: false,
      data: {
        ...action.getPlatformsResponse,
        results: [
          ...(state.data!.results || []),
          ...(action.getPlatformsResponse.results || []),
        ],
      },
    })
  ),
  on(
    PlatformsActions.getPlatformsNextPageFailure,
    (state, action): PlatformsStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error,
    })
  )
);

export function platformsReducers(
  state: PlatformsStateInterface,
  action: Action
) {
  return platformsReducer(state, action);
}
