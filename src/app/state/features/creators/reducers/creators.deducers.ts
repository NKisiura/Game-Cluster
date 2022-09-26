import { CreatorsStateInterface } from '../types/creators-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { CreatorsActions } from '../actions/creators.actions';

const initialState: CreatorsStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const creatorsReducer = createReducer(
  initialState,
  on(
    CreatorsActions.getCreators,
    (state): CreatorsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    CreatorsActions.getCreatorsSuccess,
    (state, action): CreatorsStateInterface => ({
      ...state,
      isLoading: false,
      data: action.getCreatorsResponse,
    })
  ),
  on(
    CreatorsActions.getCreatorsFailure,
    (state, action): CreatorsStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error,
    })
  ),
  on(
    CreatorsActions.getCreatorsNextPage,
    (state): CreatorsStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    CreatorsActions.getCreatorsNextPageSuccess,
    (state, action): CreatorsStateInterface => ({
      ...state,
      isLoading: false,
      data: {
        ...action.getCreatorsResponse,
        results: [
          ...(state.data!.results || []),
          ...(action.getCreatorsResponse.results || []),
        ],
      },
    })
  ),
  on(
    CreatorsActions.getCreatorsNextPageFailure,
    (state, action): CreatorsStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error,
    })
  )
);

export function creatorsReducers(
  state: CreatorsStateInterface,
  action: Action
) {
  return creatorsReducer(state, action);
}
