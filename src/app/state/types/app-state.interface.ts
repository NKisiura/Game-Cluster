import { PlatformsStateInterface } from '../features/platforms/types/platforms-state.interface';
import { GamesStateInterface } from '../features/games/types/games-state.interface';

export interface AppStateInterface {
  readonly platforms: PlatformsStateInterface;
  readonly games: GamesStateInterface;
}
