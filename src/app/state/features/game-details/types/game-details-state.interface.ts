import { GameDetailsInterface } from '../../../../global/types/entities/games/game-details.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';
import { GameScreenshotInterface } from '../../../../global/types/entities/games/game-screenshot.interface';
import { GameAchievementInterface } from '../../../../global/types/entities/games/game-achievement.interface';

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

export interface GetGameScreenshotsResponseInterface {
  readonly count: number;
  readonly next: string | null;
  readonly previous: string | null;
  readonly result: GameScreenshotInterface[] | null;
}

export interface GetGameAchievementsResponseInterface {
  readonly count: number;
  readonly next: string | null;
  readonly previous: string | null;
  readonly result: GameAchievementInterface[] | null;
}
