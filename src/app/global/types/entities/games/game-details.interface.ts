import { GameInterface } from './game.interface';

export interface GameDetailsInterface extends GameInterface {
  readonly description: string;
}
