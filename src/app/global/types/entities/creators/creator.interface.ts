import { NotGameEntity } from '../not-game-entity';
import { Entity } from '../entity';

export interface CreatorInterface extends NotGameEntity {
  readonly image: string;
  readonly positions: Entity[];
}
