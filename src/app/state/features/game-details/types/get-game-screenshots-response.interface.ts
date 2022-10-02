import { GameScreenshotInterface } from '../../../../global/types/entities/games/game-screenshot.interface';

export interface GetGameScreenshotsResponseInterface {
  readonly count: number;
  readonly next: string | null;
  readonly previous: string | null;
  readonly results: GameScreenshotInterface[] | null;
}
