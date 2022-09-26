import { PlatformsStateInterface } from '../features/platforms/types/platforms-state.interface';
import { GamesStateInterface } from '../features/games/types/games-state.interface';
import { GameDetailsStateInterface } from '../features/game-details/types/game-details-state.interface';
import { StoresStateInterface } from '../features/stores/types/stores-state.interface';
import { TagsStateInterface } from '../features/tags/types/tags-state.interface';
import { DevelopersStateInterface } from '../features/developers/types/developers-state.interface';
import { PublishersStateInterface } from '../features/publishers/types/publishers-state.interface';
import { CreatorsStateInterface } from '../features/creators/types/creators-state.interface';

export interface AppStateInterface {
  readonly platforms: PlatformsStateInterface;
  readonly games: GamesStateInterface;
  readonly gameDetails: GameDetailsStateInterface;
  readonly stores: StoresStateInterface;
  readonly tags: TagsStateInterface;
  readonly developers: DevelopersStateInterface;
  readonly publishers: PublishersStateInterface;
  readonly creators: CreatorsStateInterface;
}
