import { GameDetailsInterface } from '../../../../global/types/entities/games/game-details.interface';
import { BackendErrorResponseInterface } from '../../../types/backend-error-response.interface';
import { GameScreenshotInterface } from '../../../../global/types/entities/games/game-screenshot.interface';

export interface GameDetailsStateInterface {
  game: {
    isLoading: boolean;
    error: BackendErrorResponseInterface | null;
    data: GameDetailsInterface | null;
  };
  gameScreenshots: {
    isLoading: boolean;
    error: BackendErrorResponseInterface | null;
    data: GetGameScreenshotsResponseInterface | null;
  };
}

export interface GetGameScreenshotsResponseInterface {
  readonly count: number;
  readonly next: string | null;
  readonly previous: string | null;
  readonly result: GameScreenshotInterface[] | null;
}
