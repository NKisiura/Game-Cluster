import { GameDetailsInterface } from '../../../../global/types/entities/games/game-details.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';
import { GetGameScreenshotsResponseInterface } from './get-game-screenshots-response.interface';
import { GetGameAchievementsResponseInterface } from './get-game-achievements-response.interface';

export interface GameDetailsStateInterface {
  readonly game: {
    isLoading: boolean;
    error: BackendErrorResponseInterface | null;
    data: GameDetailsInterface | null;
  };
  readonly gameScreenshots: {
    isLoading: boolean;
    error: BackendErrorResponseInterface | null;
    data: GetGameScreenshotsResponseInterface | null;
  };
  readonly gameAchievements: {
    isLoading: boolean;
    error: BackendErrorResponseInterface | null;
    data: GetGameAchievementsResponseInterface | null;
  };
}
