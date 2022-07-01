import { GameInterface } from '../../../../global/types/entities/games/game.interface';

export interface GetGamesResponseInterface {
  readonly count: number;
  readonly next: string | null;
  readonly previous: string | null;
  readonly results: GameInterface[] | null;
}
