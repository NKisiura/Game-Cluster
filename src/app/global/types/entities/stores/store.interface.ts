import { Entity } from '../entity';

export interface StoreInterface extends Entity {
  readonly domain: string;
  readonly games_count: number;
  readonly image_background: string;
}
