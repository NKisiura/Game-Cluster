import { Entity } from '../entity';

export interface GenreInterface extends Entity {
  readonly games_count: number;
  readonly image_background: string;
}
