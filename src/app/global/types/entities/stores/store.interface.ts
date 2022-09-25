import { NotGameEntity } from '../not-game-entity';

export interface StoreInterface extends NotGameEntity {
  readonly domain: string;
}
