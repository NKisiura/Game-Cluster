import { GameInterface } from './game.interface';

export interface GameDetailsInterface extends GameInterface {
  readonly description: string;
  readonly description_raw: string;
  readonly playtime: number;
}
