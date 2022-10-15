import { AppStateInterface } from '../types/app-state.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { TotalGamesCountActions } from '../actions/total-games-count.actions';

const initialState: AppStateInterface = {
  totalGamesCount: {
    isLoading: false,
    error: null,
    data: null,
  },
};

export const appReducer = createReducer(
  initialState,
  on(
    TotalGamesCountActions.getTotalGamesCount,
    (state): AppStateInterface => ({
      ...state,
      totalGamesCount: {
        ...state.totalGamesCount,
        isLoading: true,
      },
    })
  ),
  on(
    TotalGamesCountActions.getTotalGamesCountSuccess,
    (state, action): AppStateInterface => ({
      ...state,
      totalGamesCount: {
        ...state.totalGamesCount,
        isLoading: false,
        data: action.totalGamesCount,
      },
    })
  ),
  on(
    TotalGamesCountActions.getTotalGamesCountFailure,
    (state, action): AppStateInterface => ({
      ...state,
      totalGamesCount: {
        ...state.totalGamesCount,
        isLoading: false,
        error: action.error,
      },
    })
  )
);

export function appReducers(state: AppStateInterface, action: Action) {
  return appReducer(state, action);
}
