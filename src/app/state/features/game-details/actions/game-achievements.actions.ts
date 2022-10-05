import { createAction, props } from '@ngrx/store';
import { GameDetailsActionTypes } from './game-details-action-types';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';
import { GetGameAchievementsResponseInterface } from '../types/get-game-achievements-response.interface';

export namespace GameAchievementsActions {
  export const getGameAchievements = createAction(
    GameDetailsActionTypes.GET_GAME_ACHIEVEMENTS,
    props<{ gameId: number }>()
  );

  export const getGameAchievementsSuccess = createAction(
    GameDetailsActionTypes.GET_GAME_ACHIEVEMENTS_SUCCESS,
    props<{ getAchievementsResponse: GetGameAchievementsResponseInterface }>()
  );

  export const getGameAchievementsFailure = createAction(
    GameDetailsActionTypes.GET_GAME_ACHIEVEMENTS_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );

  export const getGameAchievementsNextPage = createAction(
    GameDetailsActionTypes.GET_GAME_ACHIEVEMENTS_NEXT_PAGE,
    props<{ url: string }>()
  );

  export const getGameAchievementsNextPageSuccess = createAction(
    GameDetailsActionTypes.GET_GAME_ACHIEVEMENTS_NEXT_PAGE_SUCCESS,
    props<{ getAchievementsResponse: GetGameAchievementsResponseInterface }>()
  );

  export const getGameAchievementsNextPageFailure = createAction(
    GameDetailsActionTypes.GET_GAME_ACHIEVEMENTS_NEXT_PAGE_FAILURE,
    props<{ error: BackendErrorResponseInterface }>()
  );
}
