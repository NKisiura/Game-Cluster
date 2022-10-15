import { createAction, props } from '@ngrx/store';
import { AppActionTypes } from './app-action-types';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';

export namespace TotalGamesCountActions {
  export const getTotalGamesCount = createAction(
    AppActionTypes.GET_TOTAL_GAMES_COUNT
  );

  export const getTotalGamesCountSuccess = createAction(
    AppActionTypes.GET_TOTAL_GAMES_COUNT_SUCCESS,
    props<{ totalGamesCount: number }>()
  );

  export const getTotalGamesCountFailure = createAction(
    AppActionTypes.GET_TOTAL_GAMES_COUNT_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );
}
