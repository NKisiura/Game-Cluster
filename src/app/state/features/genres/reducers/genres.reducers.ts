import { GenresStateInterface } from '../types/genres-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { GenresActions } from '../actions/genres.actions';

const initialState: GenresStateInterface = {
  isLoading: false,
  error: null,
  data: null,
};

export const genresReducer = createReducer(
  initialState,
  on(
    GenresActions.getGenres,
    (state): GenresStateInterface => ({
      ...state,
      isLoading: true,
      error: null,
    })
  ),
  on(
    GenresActions.getGenresSuccess,
    (state, action): GenresStateInterface => ({
      ...state,
      isLoading: false,
      data: action.getGenresResponse,
    })
  ),
  on(
    GenresActions.getGenresFailure,
    (state, action): GenresStateInterface => ({
      ...state,
      isLoading: false,
      error: action.error,
    })
  )
);

export function genresReducers(state: GenresStateInterface, action: Action) {
  return genresReducer(state, action);
}
