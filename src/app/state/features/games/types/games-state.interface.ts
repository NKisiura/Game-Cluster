import { GetGamesResponseInterface } from './get-games-response.interface';

export interface GamesStateInterface {
  readonly isLoading: boolean;
  readonly error: boolean;
  readonly data: GetGamesResponseInterface | null;
}
