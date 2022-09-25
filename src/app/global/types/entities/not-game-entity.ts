import { Entity } from './entity';

export interface NotGameEntity extends Entity {
  readonly games_count: number;
  readonly image_background: string;
  readonly games: Entity[];
}
