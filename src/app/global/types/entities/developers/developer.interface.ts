import { Entity } from '../entity';

export interface DeveloperInterface extends Entity {
  readonly games_count: number;
  readonly image_background: string;
}
