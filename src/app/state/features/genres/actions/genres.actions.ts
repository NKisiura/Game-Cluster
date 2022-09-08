import { createAction, props } from '@ngrx/store';
import { GenresActionTypes } from './genres-action-types';
import { GetGenresResponseInterface } from '../types/get-genres-response.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

export namespace GenresActions {
  export const getGenres = createAction(
    GenresActionTypes.GET_GENRES,
    props<{ url: string }>()
  );

  export const getGenresSuccess = createAction(
    GenresActionTypes.GET_GENRES_SUCCESS,
    props<{ getGenresResponse: GetGenresResponseInterface }>()
  );

  export const getGenresFailure = createAction(
    GenresActionTypes.GET_GENRES_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );
}
