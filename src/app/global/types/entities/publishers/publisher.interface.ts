import { Entity } from '../entity';

export interface PublisherInterface extends Entity {
  readonly games_count: number;
  readonly image_background: string;
  readonly games: Entity[];
}
