import { DevelopersStateInterface } from '../types/developers-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { DevelopersActions } from '../actions/developers.actions';

const initialState: DevelopersStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const developersReducer = createReducer(
  initialState,
  on(
    DevelopersActions.getDevelopers,
    (state): DevelopersStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    DevelopersActions.getDevelopersSuccess,
    (state, action): DevelopersStateInterface => ({
      ...state,
      isLoading: false,
      data: action.getDevelopersResponse,
    })
  ),
  on(
    DevelopersActions.getDevelopersFailure,
    (state, action): DevelopersStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error,
    })
  ),
  on(
    DevelopersActions.getDevelopersNextPage,
    (state): DevelopersStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    DevelopersActions.getDevelopersNextPageSuccess,
    (state, action): DevelopersStateInterface => ({
      ...state,
      isLoading: false,
      data: {
        ...action.getDevelopersResponse,
        results: [
          ...(state.data!.results || []),
          ...(action.getDevelopersResponse.results || []),
        ],
      },
    })
  ),
  on(
    DevelopersActions.getDevelopersNextPageFailure,
    (state, action): DevelopersStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error,
    })
  )
);

export function developersReducers(
  state: DevelopersStateInterface,
  action: Action
) {
  return developersReducer(state, action);
}
