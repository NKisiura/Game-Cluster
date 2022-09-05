import { createAction, props } from '@ngrx/store';
import { GameDetailsInterface } from '../../../../global/types/entities/games/game-details.interface';
import { GameDetailsActionTypes } from './game-details-action-types';

export namespace GameDetailsActions {
  export const getGameDetails = createAction(
    GameDetailsActionTypes.GET_GAME_DETAILS,
    props<{ url: string }>()
  );

  export const getGameDetailsSuccess = createAction(
    GameDetailsActionTypes.GET_GAME_DETAILS_SUCCESS,
    props<{ gameDetails: GameDetailsInterface }>()
  );

  export const getGamesDetailsFailure = createAction(
    GameDetailsActionTypes.GET_GAME_DETAILS_FAILURE
  );
}
