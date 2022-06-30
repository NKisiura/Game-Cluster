import { Entity } from '../entity';
import { GameInterface } from './game.interface';

export interface GameDetailsInterface extends Entity, GameInterface {
  readonly description: string;
}
