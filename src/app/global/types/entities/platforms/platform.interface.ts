import { NotGameEntity } from '../not-game-entity';

export interface PlatformInterface extends NotGameEntity {
  readonly image: string;
  readonly year_start: number;
  readonly year_end: number;
}
