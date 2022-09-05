import { GameDetailsInterface } from '../../../../global/types/entities/games/game-details.interface';

export interface GameDetailsStateInterface {
  readonly isLoading: boolean;
  readonly error: boolean;
  readonly data: GameDetailsInterface | null;
}
