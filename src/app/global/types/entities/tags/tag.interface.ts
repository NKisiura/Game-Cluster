import { Entity } from '../entity';

export interface TagInterface extends Entity {
  readonly language: string;
  readonly games_count: number;
  readonly image_background: string;
}
