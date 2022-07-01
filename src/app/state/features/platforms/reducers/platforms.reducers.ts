import { PlatformsStateInterface } from '../types/platforms-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { PlatformsActions } from '../actions/platforms.actions';

const initialState: PlatformsStateInterface = {
  isLoading: false,
  error: false,
  data: null,
};

export const platformsReducer = createReducer(
  initialState,
  on(
    PlatformsActions.getPlatforms,
    (state): PlatformsStateInterface => ({
      ...state,
      isLoading: true,
      error: false,
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
    (state): PlatformsStateInterface => ({
      ...state,
      isLoading: false,
      error: true,
    })
  )
);

export function platformsReducers(
  state: PlatformsStateInterface,
  action: Action
) {
  return platformsReducer(state, action);
}
