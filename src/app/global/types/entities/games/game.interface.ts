import { Entity } from '../entity';

export interface GameInterface extends Entity {
  readonly released: string;
  readonly background_image: string;
}
