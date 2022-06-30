import { Entity } from '../entity';

export interface PlatformInterface extends Entity {
  readonly games_count: number;
  readonly image_background: string;
  readonly image: string;
  readonly year_start: number;
  readonly year_end: number;
}
